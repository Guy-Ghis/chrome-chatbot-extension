// script runs on every page and can extract its content
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_PAGE_CONTENT') {
    const content = document.body.innerText;
    sendResponse({ text: content });
  }
});
