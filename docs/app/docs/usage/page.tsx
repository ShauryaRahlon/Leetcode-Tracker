import Link from "next/link";

export default function UsagePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Usage Guide
        </h1>
        <p className="text-muted-foreground text-lg">
          Initialize your revision workflow.
        </p>
      </div>

      {/* Terminal Window */}
      <div className="rounded-xl overflow-hidden bg-[#1c1c1c] border border-white/10 shadow-2xl font-mono text-sm md:text-base">
        {/* Title Bar */}
        <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-x-2 border-b border-white/5">
          <div className="flex gap-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50"></div>
          </div>
          <div className="flex-1 text-center text-xs text-gray-500 font-medium opacity-70">
            user@ghostty — ~
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 space-y-8 text-gray-300">
          
          {/* Step 1 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400">
              <span>➜</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">open-leetcode</span>
            </div>
            <div className="pl-4 space-y-1 opacity-90">
              <p>Looking for problems...</p>
              <p className="text-yellow-400/90">{">"} Found one! Ready to track.</p>
              <p className="text-gray-500">// Just go to any LeetCode problem page.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400">
              <span>➜</span>
              <span className="text-blue-400">~/problem</span>
              <span className="text-white">click-save-button</span>
            </div>
            <div className="pl-4 space-y-1 opacity-90">
              <p>{">"} Creating Notion page...</p>
              <p>Reading tags, difficulty, and link...</p>
              <p className="text-emerald-400">{">"} Done! Saved to your database.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400">
              <span>➜</span>
              <span className="text-blue-400">~/notion</span>
              <span className="text-white">check-my-notes</span>
            </div>
            <div className="pl-4 rounded bg-black/20 p-4 border-l-2 border-gray-700 font-normal">
              <div className="text-yellow-100">Your New Page:</div>
              <div className="pl-4 mt-1">
                <p><span className="text-purple-400">Status:</span> <span className="text-green-400">Synced</span></p>
                <p><span className="text-purple-400">Next Step:</span> <span className="text-orange-300">Add your spaced-repetition dates!</span></p>
              </div>
            </div>
          </div>

          {/* Cursor */}
          <div className="flex items-center gap-2 text-emerald-400 animate-pulse">
            <span>➜</span>
            <span className="text-blue-400">~</span>
            <span className="w-2.5 h-4 bg-gray-400 block"></span>
          </div>

        </div>
      </div>

      <div className="flex justify-between pt-12">
        <Link 
          href="/docs/setup" 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group font-mono text-sm"
        >
          <span className="group-hover:-translate-x-1 transition-transform">cd ..</span> Back: Setup
        </Link>
      </div>
    </div>
  );
}
