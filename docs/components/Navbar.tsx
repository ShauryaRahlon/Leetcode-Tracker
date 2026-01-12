import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          LCREv <span className="text-gray-500 font-normal">Docs</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link 
            href="/docs/setup" 
            className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Documentation
          </Link>
          <a
            href="https://github.com/ShauryaRahlon/Leetcode-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
