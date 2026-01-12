
// --- Helper Functions ---
function scrapeLeetCodeData() {
  let title = document.title.split('-')[0].trim();
  const url = window.location.href;

  let difficulty = 'Medium'; 
  const textContent = document.body.innerText;
  const easy = textContent.match(/Easy/);
  const medium = textContent.match(/Medium/);
  const hard = textContent.match(/Hard/);
  
  if (easy && !medium && !hard) difficulty = 'Easy';
  else if (!easy && medium && !hard) difficulty = 'Medium';
  else if (!easy && !medium && hard) difficulty = 'Hard';

  let topics = ['LeetCode'];
  const topicElements = document.querySelectorAll('a[href^="/tag/"]');
  if (topicElements.length > 0) {
      topics = Array.from(topicElements).map(el => el.innerText);
  }

  return { title, difficulty, url, topics };
}

function showToast(message, type = 'info') {
  let toast = document.querySelector('.notion-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'notion-toast';
    document.body.appendChild(toast);
  }

  // Icon based on type
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '❌';

  toast.textContent = `${icon} ${message}`;
  toast.className = `notion-toast ${type} show`;

  // Auto hide
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}


// --- Messaging Support ---
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'scrape') {
    const data = scrapeLeetCodeData();
    sendResponse(data);
  }
});

async function sendToNotion(data, btn) {
  try {
    btn.classList.add('loading');
    
    // Delegate to Background Script to avoid CORS/Mixed Content issues
    const response = await chrome.runtime.sendMessage({
        action: 'saveProblem',
        data: data
    });

    if (response && response.success) {
      showToast('Problem saved to Notion!', 'success');
    } else {
      throw new Error(response?.error || 'Unknown error');
    }
  } catch (err) {
    console.error(err);
    let msg = err.message;
    if (msg.includes('Receiving end does not exist')) {
        msg = 'Extension background script not ready. Reload extension.';
    }
    showToast(msg, 'error');
  } finally {
    btn.classList.remove('loading');
  }
}

// --- Injection Logic ---

function createFAB() {
  const fab = document.createElement('div');
  fab.className = 'notion-fab';
  fab.title = 'Save to Notion';
  
  // Use extension icon
  const iconUrl = chrome.runtime.getURL('icons/icon48.png');
  const img = document.createElement('img');
  img.src = iconUrl;
  fab.appendChild(img);
  
  fab.onclick = (e) => {
    e.stopPropagation(); // Prevent clicks passing through
    const data = scrapeLeetCodeData();
    sendToNotion(data, fab);
  };
  
  return fab;
}

function tryInjectFAB() {
    if (document.querySelector('.notion-fab')) return;
    
    const fab = createFAB();
    document.body.appendChild(fab);
    console.log('Notion FAB injected');
}

// --- Observer ---
// Keep observer to ensure FAB stays if page re-renders heavily (less critical for FAB but good safety)
const observer = new MutationObserver((mutations) => {
    if (!document.querySelector('.notion-fab')) {
        tryInjectFAB();
    }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial try
setTimeout(tryInjectFAB, 1000); // 1s delay to be safe
