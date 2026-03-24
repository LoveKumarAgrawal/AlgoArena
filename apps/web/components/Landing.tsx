import { Contests } from "./Contests";
import { Hero } from "./Hero";
import { Problems } from "./Problems";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Live Contests",
    description: "Compete in timed programming contests and race to the top of the leaderboard.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Multi-language Support",
    description: "Submit solutions in C++, Java, JavaScript and more with instant feedback.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Real-time Standings",
    description: "Track your rank live as submissions pour in during an ongoing contest.",
  },
];

export function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <Hero />

        {/* Features strip */}
        <section className="border-y border-gray-100 bg-gray-50/60">
          <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contests />

        <section className="border-t border-gray-100 bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <Problems />
          </div>
        </section>
      </main>
    </div>
  );
}
