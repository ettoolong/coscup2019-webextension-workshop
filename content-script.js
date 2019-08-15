// test: https://www.mozilla.org/zh-TW/about/
let borderWidth = 1;
let borderColor = 'red';

const setBorder = () => {
  document.body.style.border = `${borderWidth}px solid ${borderColor}`;
}

chrome.runtime.onMessage.addListener((message) => {
  borderColor = message.color;
  setBorder();
})

chrome.storage.local.get(results => {
  borderWidth = results.borderWidth || 5;
  setBorder();
});

chrome.storage.onChanged.addListener((changes, area) => {
  if(area === 'local') {
    if (changes.borderWidth) {
      borderWidth = changes.borderWidth.newValue;
      setBorder();
    }
  }
});
