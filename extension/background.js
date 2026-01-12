
// Background Service Worker
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'saveProblem') {
    handleSaveProblem(request.data)
      .then(sendResponse)
      .catch((err) => sendResponse({ success: false, error: err.message }));
    return true; // Keep message channel open for async response
  }
});

async function handleSaveProblem(data) {
  try {
    const res = await fetch('http://localhost:5001/api/add-problem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const body = await res.json();

    if (res.ok) {
      return { success: true };
    } else {
      throw new Error(body.error || 'Failed to save');
    }
  } catch (error) {
    if (error.message.includes('Failed to fetch')) {
        throw new Error('Cannot connect to backend. Is it running on port 5001?');
    }
    throw error;
  }
}
