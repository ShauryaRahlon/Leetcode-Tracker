import Link from "next/link";

export default function UsagePage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Usage Guide</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          How to save problems to your Notion database.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
             {/* Placeholder for Screenshot */}
             <span className="text-sm">Screenshot: Problem Page</span>
          </div>
          <h3 className="text-xl font-semibold">1. Open a Problem</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Navigate to any LeetCode problem page. The extension is active on all problem URLs.
          </p>
        </div>

        <div className="space-y-4">
          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
             {/* Placeholder for FAB */}
             <span className="text-sm">Screenshot: FAB</span>
          </div>
          <h3 className="text-xl font-semibold">2. Click to Save</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Locate the floating "Save" button in the bottom-right corner. Click it to trigger the sync.
          </p>
        </div>

        <div className="space-y-4">
          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
             {/* Placeholder for Notification */}
             <span className="text-sm">Screenshot: Toast</span>
          </div>
          <h3 className="text-xl font-semibold">3. Verification</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Wait for the success toast notification. Once received, the problem is saved to your Notion database with all metadata (tags, difficulty, URL).
          </p>
        </div>
         <div className="space-y-4">
          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
             {/* Placeholder for Notion */}
             <span className="text-sm">Screenshot: Notion DB</span>
          </div>
          <h3 className="text-xl font-semibold">4. Review in Notion</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Open your Notion workspace to see the new entry. You can now add notes, spaced repetition dates, or other metadata.
          </p>
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <Link 
          href="/docs/setup" 
          className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          ← Back: Setup
        </Link>
      </div>
    </div>
  );
}
