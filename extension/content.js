chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'scrape') {
      const data = scrapeLeetCodeData();
      sendResponse(data);
    }
  });
  
  function scrapeLeetCodeData() {
    // 1. Title
    // Title is usually in document.title "Two Sum - LeetCode"
    // Or in the header element
    let title = document.title.split('-')[0].trim();
    
    // 2. URL
    const url = window.location.href;
  
    // 3. Difficulty
    // This is tricky as classes change. We look for the difficulty text.
    let difficulty = 'Medium'; // Default
    const difficultyColors = ['text-green-500', 'text-yellow-500', 'text-red-500', 'text-olive', 'text-brand-orange', 'text-pink'];
    // Try to find an element with these classes and text content Easy/Medium/Hard
    const easy = document.body.innerText.match(/Easy/);
    const medium = document.body.innerText.match(/Medium/);
    const hard = document.body.innerText.match(/Hard/);
    
    // A more specific approach: Look for the difficulty chip
    // In new UI, it's often a div with specific coloring classes
    // We can try to infer from the presence of "Easy", "Medium", "Hard" in the top section
    
    // Fallback: Check if we can find specific elements
    // This part is brittle and might need updates.
    if (easy && !medium && !hard) difficulty = 'Easy';
    else if (!easy && medium && !hard) difficulty = 'Medium';
    else if (!easy && !medium && hard) difficulty = 'Hard';
    // If multiple found (e.g. in related problems), we might be wrong. 
    // Let's try to find the specific element in the description header if possible.
    
    // 4. Topics
    // Topics are often hidden under a "Topics" tab or button.
    // Ideally we want to expand it or just grab what is visible.
    // For now, let's just grab the title and URL primarily.
    // We will send 'Uncategorized' if none found.
    let topics = ['LeetCode'];
    
    // Try to find topic tags
    const topicElements = document.querySelectorAll('a[href^="/tag/"]');
    if (topicElements.length > 0) {
        topics = Array.from(topicElements).map(el => el.innerText);
    }
  
    return {
      title,
      difficulty,
      url,
      topics
    };
  }
