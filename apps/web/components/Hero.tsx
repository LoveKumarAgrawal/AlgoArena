import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-100">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Soft accent blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-violet-50 rounded-full blur-2xl opacity-50 pointer-events-none" />

      <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: copy */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600 tracking-wide uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Live contests running
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-5">
              Compete.{" "}
              <span className="text-indigo-600">Solve.</span>{" "}
              Climb.
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              AlgoArena is where programmers compete in timed challenges, sharpen
              algorithmic thinking, and rise through the leaderboard.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contests"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                prefetch={false}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                View Contests
              </Link>
              <Link
                href="/problems"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                prefetch={false}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Solve Problems
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap gap-6 divide-x divide-gray-100">
              {[
                { label: "Problems", value: "100+" },
                { label: "Contests", value: "50+" },
                { label: "Users", value: "1K+" },
              ].map((stat) => (
                <div key={stat.label} className="pl-6 first:pl-0">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-400 font-medium mt-0.5 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: code window illustration */}
          <div className="hidden md:flex justify-center items-center">
            <div className="w-full max-w-sm lg:max-w-md">
              {/* Window chrome */}
              <div className="rounded-xl shadow-2xl border border-gray-200 overflow-hidden bg-white">
                {/* Title bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-400 font-mono">two-sum.js</span>
                </div>
                {/* Code body */}
                <div className="bg-gray-950 px-5 py-5 font-mono text-xs leading-relaxed select-none">
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-1 text-gray-600 text-right select-none" aria-hidden>
                      {Array.from({ length: 14 }, (_, i) => (
                        <span key={i}>{i + 1}</span>
                      ))}
                    </div>
                    <div className="flex-1 overflow-x-auto">
                      <div><span className="text-violet-400">function</span> <span className="text-sky-300">twoSum</span><span className="text-gray-300">(nums, target) {"{"}</span></div>
                      <div className="pl-4"><span className="text-violet-400">const</span> <span className="text-sky-200">map</span> <span className="text-gray-300">= </span><span className="text-violet-400">new</span> <span className="text-sky-300">Map</span><span className="text-gray-300">();</span></div>
                      <div className="pl-4"><span className="text-violet-400">for</span> <span className="text-gray-300">(</span><span className="text-violet-400">let</span> <span className="text-sky-200">i</span> <span className="text-gray-300">= </span><span className="text-amber-300">0</span><span className="text-gray-300">; i &lt; nums.length; i++) {"{"}</span></div>
                      <div className="pl-8"><span className="text-violet-400">const</span> <span className="text-sky-200">comp</span> <span className="text-gray-300">= target - nums[i];</span></div>
                      <div className="pl-8"><span className="text-violet-400">if</span> <span className="text-gray-300">(map.</span><span className="text-sky-300">has</span><span className="text-gray-300">(comp)) {"{"}</span></div>
                      <div className="pl-12"><span className="text-violet-400">return</span> <span className="text-gray-300">[map.</span><span className="text-sky-300">get</span><span className="text-gray-300">(comp), i];</span></div>
                      <div className="pl-8"><span className="text-gray-300">{"}"}</span></div>
                      <div className="pl-8"><span className="text-sky-200">map</span><span className="text-gray-300">.</span><span className="text-sky-300">set</span><span className="text-gray-300">(nums[i], i);</span></div>
                      <div className="pl-4"><span className="text-gray-300">{"}"}</span></div>
                      <div><span className="text-gray-300">{"}"}</span></div>
                      <div>&nbsp;</div>
                      <div><span className="text-gray-500">{"// Input: nums=[2,7,11,15], target=9"}</span></div>
                      <div><span className="text-gray-500">{"// Output: [0,1]"}</span></div>
                      {/* blinking cursor line */}
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-emerald-400 text-[10px] font-semibold tracking-wide">✓ Accepted</span>
                        <span className="ml-1 inline-block w-1.5 h-3.5 bg-indigo-400 animate-pulse rounded-sm" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-t border-gray-200 text-[11px] text-gray-400 font-mono">
                  <span>Runtime: <span className="text-gray-700 font-semibold">48ms</span></span>
                  <span>Memory: <span className="text-gray-700 font-semibold">42.3 MB</span></span>
                  <span className="text-emerald-600 font-semibold">Beats 98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
