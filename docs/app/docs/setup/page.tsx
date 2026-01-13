import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function SetupPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600">
          Setup Guide
        </h1>
        <p className="text-muted-foreground text-lg">
          Three steps to launch your tracker.
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
            user@ghostty — ~/leetcode-tracker/setup
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 space-y-10 text-gray-300">
          
          {/* Step 1: Database Automation */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-400">
              <span>➜</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">setup-database</span>
            </div>
            <div className="pl-4 space-y-3 opacity-90">
              <p>I'll create your Notion databases automatically.</p>
              <div className="space-y-2">
                 <p className="text-xs text-gray-500 uppercase tracking-widest">Run these commands:</p>
                 <CodeBlock className="!bg-black/30 !border-white/10 text-gray-200">pip install -r scripts/requirements.txt</CodeBlock>
                 <CodeBlock className="!bg-black/30 !border-white/10 text-gray-200">python scripts/setup_db.py</CodeBlock>
              </div>
              <p className="text-yellow-400/90">{">"} Just paste your Notion Token when asked.</p>
              <p className="text-emerald-400">{">"} Done! Databases ready.</p>
            </div>
          </div>

          {/* Step 2: Backend */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-400">
              <span>➜</span>
              <span className="text-blue-400">~/backend</span>
              <span className="text-white">turn-on-server</span>
            </div>
            <div className="pl-4 space-y-3 opacity-90">
              <p>Now, let's start the engine.</p>
              <div className="space-y-2">
                 <p className="text-xs text-gray-500 uppercase tracking-widest">Install & Start:</p>
                 <CodeBlock className="!bg-black/30 !border-white/10 text-gray-200">npm install</CodeBlock>
                 <div className="py-2">
                    <p className="text-sm text-gray-400 mb-1">Make a file named <span className="text-white">.env</span> with your IDs:</p>
                    <CodeBlock className="!bg-black/30 !border-white/10 text-gray-200 text-xs">
{`NOTION_TOKEN=secret_...
PROBLEMS_DB_ID=your_id
TOPICS_DB_ID=your_id
PORT=5001`}
                    </CodeBlock>
                 </div>
                 <CodeBlock className="!bg-black/30 !border-white/10 text-gray-200">node index.js</CodeBlock>
              </div>
              <p className="text-emerald-400">{">"} It's alive! Listening on port 5001.</p>
            </div>
          </div>

          {/* Step 3: Extension */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-400">
              <span>➜</span>
              <span className="text-blue-400">~/extension</span>
              <span className="text-white">install-extension</span>
            </div>
            <div className="pl-4 space-y-2 opacity-90">
              <p>Final step: Add it to Chrome.</p>
              <ul className="list-decimal list-inside space-y-1 text-gray-400">
                <li>Go to <span className="text-white">chrome://extensions</span></li>
                <li>Turn on <span className="text-white">Developer Mode</span> (top right)</li>
                <li>Click <span className="text-white">Load Unpacked</span></li>
                <li>Pick the <span className="text-blue-400">extension</span> folder</li>
              </ul>
              <p className="text-emerald-400 mt-2">{">"} All set! Go solve some problems.</p>
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

      <div className="flex justify-end pt-12">
        <Link 
          href="/docs/usage" 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group font-mono text-sm"
        >
          Next: Usage <span className="group-hover:translate-x-1 transition-transform">cd usage/</span>
        </Link>
      </div>
    </div>
  );
}
