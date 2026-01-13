# Notion Integration Setup Guide

This guide will help you set up the required Notion databases and connect them to the LeetCode Revision Tracker.

## Prerequisites

1.  **Python Installed**: Ensure you have Python installed on your system.
2.  **Notion Account**: You need a Notion account.

## Step 1: Create a Notion Integration

1.  Go to [Notion My Integrations](https://www.notion.so/my-integrations).
2.  Click **New integration**.
3.  Name it (e.g., "LeetCode Tracker").
4.  Select the desired workspace.
5.  Click **Submit**.
6.  **Copy the "Internal Integration Secret"**. This is your `NOTION_TOKEN`.

## Step 2: Prepare a Notion Page

1.  Open Notion and create a new page (e.g., "LeetCode Dashboard").
2.  **Share the page with your integration**:
    *   Click the `...` menu at the top right of the page.
    *   Click **Connections** (or "Add connections").
    *   Search for and select your integration ("LeetCode Tracker").
    *   Confirm the connection.
3.  **Get the Page ID**:
    *   Copy the URL of the page.
    *   The ID is the 32-character string at the end of the URL.
    *   Example: `https://notion.so/myworkspace/LeetCode-Dashboard-1234567890abcdef1234567890abcdef` -> `1234567890abcdef1234567890abcdef`

## Step 3: Run the Setup Script

We have provided a script to automatically create the "Topics" and "Problems" databases with the correct schema.

1.  Open your terminal and navigate to the project root.
2.  Install the required Python library:
    ```bash
    pip install -r scripts/requirements.txt
    ```
3.  Run the setup script:
    ```bash
    python scripts/setup_db.py
    ```
4.  Follow the prompts:
    *   Enter your **Notion Token** (from Step 1).
    *   Enter your **Page ID** (from Step 2).

## Step 4: Update Configuration

The script will output the IDs for your new databases. You need to add these to your `.env` file in the `notion-backend` directory.

1.  Open `notion-backend/.env`.
2.  Update (or add) the following variables:

```env
NOTION_TOKEN=your_secret_token_here
TOPICS_DB_ID=id_from_script_output
PROBLEMS_DB_ID=id_from_script_output
```

## Step 5: Start the Backend

Now you can start the backend server:

```bash
cd notion-backend
npm start
```

You are all set!
