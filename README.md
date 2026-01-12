# LeetCode Revision Tracker

A full-stack utility designed to streamline the process of tracking LeetCode problem-solving progress. This tool integrates directly with the LeetCode interface to capture problem metadata and sync it to a Notion database for organized revision.

## Project Components

### 1. Chrome Extension (`/extension`)
A Manifest V3 Chrome Extension that integrates a "Save to Notion" trigger directly into the LeetCode user interface.
- **Capabilities**: Automated data extraction, seamless UI integration, and real-time feedback.
- **Stack**: JavaScript, CSS3, Chrome Extensions API.

### 2. Backend Service (`/notion-backend`)
A lightweight Node.js/Express server acting as the secure bridge between the browser extension and the Notion API.
- **Capabilities**: Data validation, deduplication redundancy, and Notion database management.
- **Stack**: Node.js, Express, Notion Client SDK.

## Documentation

A full documentation site is available in the `docs/` directory.
To run it:
```bash
cd docs
npm install
npm run dev
```
Visit `http://localhost:3000` to view the comprehensive setup and usage guides.

## Getting Started

### Backend Setup
1.  Initialize the backend service:
    ```bash
    cd notion-backend
    npm install
    node index.js
    ```
    *The service listens on http://localhost:5001.*

### Extension Setup
1.  Open Chrome and access the Extensions management page (`chrome://extensions`).
2.  Enable Developer mode.
3.  Select "Load unpacked" and choose the `extension/` directory.

### Workflow
1.  Open a problem on LeetCode.
2.  Click the floating "Save" button in the bottom-right corner.
3.  Verify the entry in your Notion database.
