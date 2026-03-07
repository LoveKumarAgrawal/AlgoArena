import { getExistingContests, getUpcomingContests } from "../app/db/contest";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";
import { db } from "../app/db";
import { ContestCard } from "./ContestCard";
import Link from "next/link";

export async function Contests() {
  const session = await getServerSession(authOptions);

  let isAdmin = false;
  if (session?.user?.id) {
    const dbUser = await db.user.findUnique({
      where: { id: session.user.id },
      select: { role: true },
    });
    isAdmin = dbUser?.role === "ADMIN";
  }

  const [upcomingContests, pastContests] = await Promise.all([
    getUpcomingContests(),
    getExistingContests(),
  ]);
  return (
    <div className="min-h-screen">
      {isAdmin && (
        <div className="bg-white dark:bg-gray-900 pt-8 md:pt-10 pb-0">
          <div className="container mx-auto px-4 md:px-6 flex justify-end">
            <Link
              href="/admin/contest/create"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Create Contest
            </Link>
          </div>
        </div>
      )}
      <section className="bg-white dark:bg-gray-900 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Upcoming Contests</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the upcoming programming contests on Codeforces.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingContests.map((contest) => (
              <ContestCard
                key={contest.id}
                title={contest.title}
                id={contest.id}
                startTime={contest.startTime}
                endTime={contest.endTime}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Previous Contests</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the previous programming contests on Codeforces.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastContests.map((contest) => (
              <ContestCard
                key={contest.id}
                title={contest.title}
                id={contest.id}
                startTime={contest.startTime}
                endTime={contest.endTime}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
