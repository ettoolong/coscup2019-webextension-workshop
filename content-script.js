// test: https://www.mozilla.org/zh-TW/about/
document.body.style.border = '5px solid red';

chrome.runtime.onMessage.addListener((message) => {
  document.body.style.border = `5px solid ${message.color}`;
})
