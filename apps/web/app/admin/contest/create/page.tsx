import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../lib/auth";
import { db } from "../../../db";
import { getAllProblems } from "../../../db/problem";
import { CreateContest } from "../../../../components/CreateContest";

export default async function CreateContestPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/admin/contest/create");
  }

  const dbUser = await db.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  });

  if (dbUser?.role !== "ADMIN") {
    redirect("/contests");
  }

  const problems = await getAllProblems();

  return <CreateContest problems={problems} />;
}

export const dynamic = "force-dynamic";
