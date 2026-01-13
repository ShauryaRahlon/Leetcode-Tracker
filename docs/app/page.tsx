import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-orange-500/10 animate-pulse-slow"></div>

      <div className="z-10 text-center max-w-4xl px-6">
        <div className="inline-flex items-center rounded-full border border-muted bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-xl mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
          v1.0.0 Now Available
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground pb-4">
           Sync Code. <br/> Master Logic.
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Seamlessly integrate LeetCode with Notion. Track your progress, revise efficiently, and conquer the coding interview.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/docs/setup"
            className="px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Get Started
          </Link>
          <a
            href="https://github.com/ShauryaRahlon/Leetcode-Tracker"
            className="px-8 py-4 bg-background text-foreground font-semibold rounded-full hover:bg-muted transition-all border border-border hover:border-gray-400 dark:hover:border-gray-600 shadow-sm hover:shadow-md"
          >
            View Verification
          </a>
        </div>
      </div>
    </div>
  );
}
