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
    <div className="bg-white">
      {/* Upcoming Contests */}
      <section className="border-t border-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-1">
                Schedule
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Upcoming Contests
              </h2>
            </div>
            <div className="flex items-center gap-3">
              {isAdmin && (
                <Link
                  href="/admin/contest/create"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Create Contest
                </Link>
              )}
              <Link
                href="/contests"
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1"
              >
                View all
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {upcomingContests.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 py-16 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-medium text-gray-500">No upcoming contests right now</p>
              <p className="text-xs text-gray-400 mt-1">Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
          )}
        </div>
      </section>

      {/* Previous Contests */}
      <section className="border-t border-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                Archive
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Previous Contests
              </h2>
            </div>
          </div>

          {pastContests.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 py-16 text-center">
              <p className="text-sm font-medium text-gray-500">No past contests yet</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
          )}
        </div>
      </section>
    </div>
  );
}
