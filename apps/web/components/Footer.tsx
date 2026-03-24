import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-900">
          <div className="flex items-center justify-center w-6 h-6 rounded bg-gray-900 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <span className="text-sm font-bold">AlgoArena</span>
          <span className="text-xs text-gray-400 ml-1">&copy; {new Date().getFullYear()}</span>
        </div>

        <nav className="flex items-center gap-5">
          {[
            { href: "#", label: "About" },
            { href: "#", label: "Contact" },
            { href: "#", label: "Privacy" },
            { href: "#", label: "Terms" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-gray-400 hover:text-gray-700 transition-colors"
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
