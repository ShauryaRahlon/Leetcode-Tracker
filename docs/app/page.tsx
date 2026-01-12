import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="z-10 text-center max-w-2xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 pb-2">
           Sync Code. <br/> Master Logic.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10">
          Seamlessly integrate LeetCode with Notion. Track your progress, revise efficiently, and conquer the coding interview.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/docs/setup"
            className="px-8 py-3 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
          <a
            href="https://github.com/ShauryaRahlon/Leetcode-Tracker"
            className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-foreground font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
          >
            View Verification
          </a>
        </div>
      </div>
    </div>
  );
}
