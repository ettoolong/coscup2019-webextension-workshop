chrome.storage.local.get(results => {
  let elem = document.getElementById('borderWidth');
  elem.value = results.borderWidth || 5;
  elem.addEventListener('input', event => {
    chrome.storage.local.set({borderWidth: parseInt(elem.value)});
  });

  document.getElementById('borderWidthLabel').textContent = chrome.i18n.getMessage('borderWidth');
});
