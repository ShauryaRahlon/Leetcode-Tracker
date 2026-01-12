# LeetCode to Notion Extension

A premium Chrome Extension designed to seamlessly sync LeetCode problems to your Notion database.

## Features

- **One-Click Save**: A Floating Action Button (FAB) is injected specifically into LeetCode problem pages for instant saving.
- **Smart Scraping**: Automatically captures essential data including Problem Title, Difficulty, URL, and Topics.
- **Micro-Interactions**: Features a minimalist pulse animation for loading states and gentle hover effects.
- **Robust Architecture**: Built on Manifest V3 with a Background Proxy architecture to bypass CORS and Mixed Content restrictions reliably.
- **Feedback System**: Integrated toast notifications provide clear success and error states without disrupting workflow.

## Installation

### Prerequisites

The extension relies on a local Node.js backend to interface with the Notion API.

1.  Navigate to the backend directory:
    ```bash
    cd ../notion-backend
    ```
2.  Install dependencies and start the server:
    ```bash
    npm install
    node index.js
    ```
    *Note: The server runs on port 5001 by default.*

### Loading the Extension

1.  Open Chrome and navigate to `chrome://extensions`.
2.  Enable **Developer mode** in the top-right corner.
3.  Click **Load unpacked**.
4.  Select the `extension` directory from this project.

## Usage Guide

1.  **Select a Problem**: Navigate to any problem on LeetCode (e.g., Two Sum).
2.  **Locate the Button**: A "Save" button will appear in the bottom-right corner of the window.
3.  **Save**: Click the button to sync the problem.
    - A **Pulse Animation** indicates the request is in progress.
    - A **Success Notification** confirms the data has been sent to Notion.
    - An **Error Notification** alerts you to any connectivity issues.

## Troubleshooting

- **Backend Connection Issues**: If the popup indicator is red or the button fails, ensure `node index.js` is running and port 5001 is available.
- **Extension Context Invalidated**: If you see "Receiving end does not exist," simply refresh the LeetCode page.
- **Button Not Visible**: The button only injects on problem pages (`/problems/*`). Ensure you are viewing a specific problem.

## Technical Architecture

- **Manifest V3**: Adheres to the latest Chrome extension security and performance standards.
- **Content Script**: Handles DOM manipulation and data scraping in an isolated environment.
- **Background Service Worker**: Acts as a proxy for API requests, ensuring reliable communication with the local backend.
- **Popup Interface**: Provides connection status diagnostics.
