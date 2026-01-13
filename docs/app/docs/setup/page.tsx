import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function SetupPage() {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
          Setup Guide
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Get the LeetCode Revision Tracker up and running in minutes.
        </p>
      </div>

      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background font-bold text-sm">1</div>
          <h2 className="text-2xl font-semibold tracking-tight">Automated Database Setup</h2>
        </div>
        
        <div className="ml-0 md:ml-12 space-y-6">
            <p className="text-muted-foreground">
                We provide a script to automatically create the required Notion databases for you.
            </p>
            
            <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-700 dark:text-orange-300 text-sm">
                <span className="font-semibold block mb-1">⚠️ Note</span>
                There might be some errors in the script which will be removed soon. Please follow the instructions carefully.
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <h3 className="font-medium mb-4 flex items-center gap-2">
                    <span className="text-muted-foreground">1.1</span> Install Requirements
                  </h3>
                  <CodeBlock>
                      pip install -r scripts/requirements.txt
                  </CodeBlock>
              </div>

              <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <h3 className="font-medium mb-4 flex items-center gap-2">
                    <span className="text-muted-foreground">1.2</span> Run Script
                  </h3>
                  <CodeBlock>
                      python scripts/setup_db.py
                  </CodeBlock>
                  <p className="mt-4 text-xs text-muted-foreground">
                      Follow the prompts to enter your <strong>Notion Token</strong> and <strong>Page ID</strong>.
                  </p>
              </div>
            </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background font-bold text-sm">2</div>
          <h2 className="text-2xl font-semibold tracking-tight">Backend Configuration</h2>
        </div>
        
        <div className="ml-0 md:ml-12 space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card shadow-sm">
            <h3 className="font-medium mb-4">Install & Configure</h3>
            <div className="space-y-4">
                <div className="grid gap-2">
                    <div className="text-sm text-muted-foreground">Navigate to backend:</div>
                    <CodeBlock>cd notion-backend</CodeBlock>
                </div>
                <div className="grid gap-2">
                    <div className="text-sm text-muted-foreground">Install dependencies:</div>
                    <CodeBlock>npm install</CodeBlock>
                </div>
                <div className="grid gap-2">
                    <div className="text-sm text-muted-foreground">Create .env file:</div>
                    <CodeBlock>{`NOTION_TOKEN=secret_...
PROBLEMS_DB_ID=your_problems_database_id
TOPICS_DB_ID=your_topics_database_id
PORT=5001`}</CodeBlock>
                </div>
                <div className="grid gap-2">
                    <div className="text-sm text-muted-foreground">Start server:</div>
                    <CodeBlock>node index.js</CodeBlock>
                </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full w-fit">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Server running on http://localhost:5001
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background font-bold text-sm">3</div>
          <h2 className="text-2xl font-semibold tracking-tight">Extension Configuration</h2>
        </div>
        
        <div className="ml-0 md:ml-12 space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card shadow-sm">
            <h3 className="font-medium mb-4">Set API URL</h3>
            <p className="text-sm text-muted-foreground mb-4">
              The extension needs to know where your backend is running.
            </p>
            <div className="space-y-4">
                <div className="grid gap-2">
                    <div className="text-sm text-muted-foreground">Navigate to extension folder:</div>
                    <CodeBlock>cd extension</CodeBlock>
                </div>
                <div className="grid gap-2">
                    <div className="text-sm text-muted-foreground">Duplicate config file:</div>
                    <CodeBlock>cp config.example.js config.js</CodeBlock>
                </div>
                <div className="grid gap-2">
                    <div className="text-sm text-muted-foreground">Update <code>config.js</code>:</div>
                    <CodeBlock>{`const CONFIG = {
  // Local Development: http://localhost:5001
  // Production: https://your-app.onrender.com
  API_BASE_URL: 'http://localhost:5001' 
};`}</CodeBlock>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background font-bold text-sm">4</div>
          <h2 className="text-2xl font-semibold tracking-tight">Extension Installation</h2>
        </div>
        
        <div className="ml-0 md:ml-12">
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <ol className="relative border-l border-border ml-3 space-y-8">                  
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-muted rounded-full -left-3 ring-4 ring-background">
                    1
                </span>
                <h3 className="font-medium text-lg">Open Extensions Page</h3>
                <div className="text-sm text-muted-foreground mt-1">Navigate to <CodeBlock className="inline-block p-1 bg-muted rounded text-xs align-middle">chrome://extensions</CodeBlock> in Chrome.</div>
              </li>
              <li className="ml-6">
                 <span className="absolute flex items-center justify-center w-6 h-6 bg-muted rounded-full -left-3 ring-4 ring-background">
                    2
                </span>
                <h3 className="font-medium text-lg">Enable Developer Mode</h3>
                <p className="text-sm text-muted-foreground mt-1">Toggle the switch in the top-right corner.</p>
              </li>
              <li className="ml-6">
                 <span className="absolute flex items-center justify-center w-6 h-6 bg-muted rounded-full -left-3 ring-4 ring-background">
                    3
                </span>
                <h3 className="font-medium text-lg">Load Unpacked</h3>
                <div className="text-sm text-muted-foreground mt-1">Click the button and select the <CodeBlock className="inline-block p-1 bg-muted rounded text-xs align-middle">extension</CodeBlock> folder from the project.</div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <div className="flex justify-end pt-12">
        <Link 
          href="/docs/usage" 
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
        >
          Next: Usage Guide 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
