import Link from "next/link";

export default function SetupPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Setup Guide</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Get the LeetCode Revision Tracker up and running in minutes.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span className="bg-foreground text-background w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
          Backend Configuration
        </h2>
        
        <div className="space-y-6 ml-10">
          <p className="text-gray-600 dark:text-gray-400">
            The backend acts as a bridge between the Chrome Extension and Notion API.
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h3 className="font-medium mb-3">1. Navigate to the backend directory</h3>
            <code className="block bg-gray-950 text-gray-50 p-4 rounded-md text-sm font-mono overflow-x-auto">
              cd notion-backend
            </code>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h3 className="font-medium mb-3">2. Install Dependencies</h3>
            <code className="block bg-gray-950 text-gray-50 p-4 rounded-md text-sm font-mono overflow-x-auto">
              npm install
            </code>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h3 className="font-medium mb-3">3. Configure Environment Variables</h3>
            <p className="text-sm text-gray-500 mb-4">
              Create a <code className="text-xs bg-gray-200 dark:bg-gray-800 p-1 rounded">.env</code> file in the <code className="text-xs bg-gray-200 dark:bg-gray-800 p-1 rounded">notion-backend</code> directory with the following keys:
            </p>
            <code className="block bg-gray-950 text-gray-50 p-4 rounded-md text-sm font-mono overflow-x-auto">
              NOTION_TOKEN=secret_...<br/>
              PROBLEMS_DB_ID=your_problems_database_id<br/>
              TOPICS_DB_ID=your_topics_database_id<br/>
              PORT=5001
            </code>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h3 className="font-medium mb-3">4. Start the Server</h3>
            <code className="block bg-gray-950 text-gray-50 p-4 rounded-md text-sm font-mono overflow-x-auto">
              node index.js
            </code>
            <p className="mt-3 text-sm text-green-600 dark:text-green-400">
              ✓ Server will run on http://localhost:5001
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span className="bg-foreground text-background w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
          Extension Installation
        </h2>
        
        <div className="space-y-6 ml-10">
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400">
              <li>Open Chrome and navigate to <code className="text-xs bg-gray-200 dark:bg-gray-800 p-1 rounded">chrome://extensions</code></li>
              <li>Toggle <strong>Developer mode</strong> in the top-right corner.</li>
              <li>Click <strong>Load unpacked</strong>.</li>
              <li>Select the <code className="text-xs bg-gray-200 dark:bg-gray-800 p-1 rounded">extension</code> folder from the project root.</li>
            </ol>
          </div>
        </div>
      </section>

      <div className="flex justify-end pt-8">
        <Link 
          href="/docs/usage" 
          className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          Next: Usage Guide →
        </Link>
      </div>
    </div>
  );
}
