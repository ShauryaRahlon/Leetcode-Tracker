import Link from "next/link";

export default function UsagePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-16 py-8">
      <div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
          Usage Guide
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Three simple steps to build your personal algorithm database.
        </p>
      </div>

      <div className="space-y-12">
        {/* Step 1 */}
        <div className="group relative border-l-2 border-muted pl-8 hover:border-foreground transition-colors duration-300">
           <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-muted group-hover:border-foreground transition-colors duration-300"></div>
           <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3">
             1. Open a Problem
           </h3>
           <p className="text-lg text-muted-foreground leading-relaxed">
             Navigate to any LeetCode problem page. The tracker automatically detects the problem context, ready for synchronization.
           </p>
        </div>

        {/* Step 2: Merged Save & Verify */}
        <div className="group relative border-l-2 border-muted pl-8 hover:border-foreground transition-colors duration-300">
           <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-muted group-hover:border-foreground transition-colors duration-300"></div>
           <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3">
             2. Save & Verify
           </h3>
           <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             Click the floating <span className="font-mono text-sm bg-muted px-2 py-1 rounded">Save</span> button in the bottom-right corner. 
           </p>
           <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
             <p className="text-sm font-medium text-foreground">
               What happens next?
             </p>
             <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
               <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                 Extension extracts problem metadata (tags, difficulty, URL).
               </li>
               <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                 Data is sent securely to your Notion backend.
               </li>
               <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                 You receive a success toast notification.
               </li>
             </ul>
           </div>
        </div>

        {/* Step 3 */}
        <div className="group relative border-l-2 border-muted pl-8 hover:border-foreground transition-colors duration-300">
           <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-muted group-hover:border-foreground transition-colors duration-300"></div>
           <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3">
             3. Review in Notion
           </h3>
           <p className="text-lg text-muted-foreground leading-relaxed">
             Open your Notion workspace to see the new entry. Add your personal notes, spaced repetition schedules, or alternative solutions.
           </p>
        </div>
      </div>

      <div className="flex justify-between pt-12 border-t border-border/40">
        <Link 
          href="/docs/setup" 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back: Setup
        </Link>
      </div>
    </div>
  );
}
