document.getElementById('saveBtn').addEventListener('click', async () => {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = 'Scraping data...';
    statusDiv.className = 'loading';
  
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      if (!tab.url.includes('leetcode.com/problems/')) {
        throw new Error('Please navigate to a LeetCode problem page.');
      }
  
      // Send message to content script to scrape data
      const response = await chrome.tabs.sendMessage(tab.id, { action: 'scrape' });
      
      if (!response) {
        throw new Error('Failed to get response from content script. Try refreshing the page.');
      }
  
      statusDiv.textContent = 'Sending to Notion...';
      
      // Send data to backend
      const res = await fetch('http://localhost:5001/api/add-problem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(response)
      });
  
      const data = await res.json();
  
      if (res.ok) {
        statusDiv.textContent = 'Successfully saved to Notion!';
        statusDiv.className = 'success';
      } else {
        throw new Error(data.error || 'Failed to save to backend');
      }
  
    } catch (err) {
      statusDiv.textContent = err.message;
      statusDiv.className = 'error';
      console.error(err);
    }
  });
