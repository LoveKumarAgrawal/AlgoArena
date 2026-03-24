import { getProblems } from "../app/db/problem";
import Link from "next/link";

const difficultyConfig: Record<string, { label: string; color: string; bg: string }> = {
  EASY: { label: "Easy", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
  MEDIUM: { label: "Medium", color: "text-amber-600", bg: "bg-amber-50 border-amber-100" },
  HARD: { label: "Hard", color: "text-red-500", bg: "bg-red-50 border-red-100" },
};

export async function Problems() {
  const problems = await getProblems();

  return (
    <div>
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-1">
            Practice
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular Problems</h2>
        </div>
        <Link
          href="/problems"
          className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {problems.map((problem, index) => (
          <ProblemCard problem={problem} key={problem.id} index={index} />
        ))}
      </div>
    </div>
  );
}

function ProblemCard({ problem, index }: { problem: any; index: number }) {
  const diff = difficultyConfig[problem.difficulty] ?? {
    label: problem.difficulty,
    color: "text-gray-600",
    bg: "bg-gray-100 border-gray-200",
  };

  return (
    <div className="group relative flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 overflow-hidden">
      {/* Numbered top strip */}
      <div className="flex items-center gap-3 px-5 pt-5 pb-0">
        <span className="flex items-center justify-center w-7 h-7 rounded-md bg-gray-100 text-xs font-bold text-gray-400 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${diff.bg} ${diff.color}`}
        >
          {diff.label}
        </span>
      </div>

      <div className="flex flex-col flex-1 px-5 pt-3 pb-5">
        <h3 className="font-semibold text-gray-900 text-base mb-1 leading-snug group-hover:text-indigo-600 transition-colors capitalize">
          {problem.title}
        </h3>
        <p className="text-xs text-gray-400 mb-6">
          {problem.solved ?? 0} submissions
        </p>

        <div className="mt-auto">
          <Link
            href={`/problem/${problem.id}`}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 transition-colors"
            prefetch={false}
          >
            Solve Problem
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
