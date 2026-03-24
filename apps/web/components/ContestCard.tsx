import Link from "next/link";
import { parseFutureDate, parseOldDate } from "../app/lib/time";

interface ContestCardParams {
  title: string;
  id: string;
  endTime: Date;
  startTime: Date;
}

export function ContestCard({
  title,
  id,
  startTime,
  endTime,
}: ContestCardParams) {
  const durationMs = new Date(endTime).getTime() - new Date(startTime).getTime();
  const durationHrs = durationMs / (1000 * 60 * 60);
  const duration =
    durationHrs < 1
      ? `${Math.round(durationHrs * 60)} min`
      : `${durationHrs} hr`;

  const now = Date.now();
  const started = new Date(startTime).getTime() < now;
  const ended = new Date(endTime).getTime() < now;
  const isActive = started && !ended;

  let statusLabel = "Upcoming";
  let statusColor = "bg-sky-50 text-sky-600 border-sky-100";
  if (isActive) {
    statusLabel = "Live";
    statusColor = "bg-emerald-50 text-emerald-600 border-emerald-100";
  } else if (ended) {
    statusLabel = "Ended";
    statusColor = "bg-gray-100 text-gray-500 border-gray-200";
  }

  return (
    <div className="group relative flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 overflow-hidden">
      {/* Top accent line */}
      <div
        className={`h-1 w-full ${isActive ? "bg-emerald-400" : ended ? "bg-gray-200" : "bg-indigo-400"}`}
      />

      <div className="flex flex-col flex-1 p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <h3 className="font-semibold text-gray-900 text-base leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          <span
            className={`flex-shrink-0 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${statusColor}`}
          >
            {isActive && (
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
            )}
            {statusLabel}
          </span>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-5 mb-6 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {started
                ? parseOldDate(new Date(startTime))
                : parseFutureDate(new Date(startTime))}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href={`/contest/${id}`}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              isActive
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : ended
                  ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  : "bg-gray-900 text-white hover:bg-gray-700"
            }`}
            prefetch={false}
          >
            {isActive ? "Join Now" : ended ? "View Results" : "View Contest"}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
