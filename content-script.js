let borderWidth = 1;
let borderColor = 'red';

const setBorder = () => {
  document.body.style.border = `${borderWidth}px solid ${borderColor}`;
}

browser.runtime.onMessage.addListener((message) => {
  borderColor = message.color;
  setBorder();
})

browser.storage.local.get().then(results => {
  borderWidth = results.borderWidth || 5;
  setBorder();
});

browser.storage.onChanged.addListener((changes, area) => {
  if(area === 'local') {
    if (changes.borderWidth) {
      borderWidth = changes.borderWidth.newValue;
      setBorder();
    }
  }
});
