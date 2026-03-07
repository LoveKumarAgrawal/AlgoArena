import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { db } from "../../db";
import { z } from "zod";

const CreateContestSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  startTime: z.string().datetime(),
  endTime: z.string().datetime(),
  problemIds: z.array(z.string()).min(1, "Select at least one problem"),
  hidden: z.boolean().optional().default(false),
});

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Check admin role
  const dbUser = await db.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  });

  if (dbUser?.role !== "ADMIN") {
    return NextResponse.json(
      { message: "Forbidden: Admin access required" },
      { status: 403 },
    );
  }

  const body = await req.json();
  const parsed = CreateContestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { title, description, startTime, endTime, problemIds, hidden } =
    parsed.data;

  if (new Date(endTime) <= new Date(startTime)) {
    return NextResponse.json(
      { message: "End time must be after start time" },
      { status: 400 },
    );
  }

  // Verify all problems exist
  const problems = await db.problem.findMany({
    where: { id: { in: problemIds } },
    select: { id: true },
  });

  if (problems.length !== problemIds.length) {
    return NextResponse.json(
      { message: "One or more selected problems do not exist" },
      { status: 400 },
    );
  }

  const contest = await db.contest.create({
    data: {
      title,
      description,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      hidden,
      problems: {
        create: problemIds.map((problemId, index) => ({
          id: `${Date.now()}-${index}`,
          problemId,
          index: index + 1,
        })),
      },
    },
    include: {
      problems: {
        include: { problem: true },
      },
    },
  });

  return NextResponse.json({ contest }, { status: 201 });
}
