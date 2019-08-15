browser.storage.local.get().then(results => {
  let elem = document.getElementById('borderWidth');
  elem.value = results.borderWidth || 5;
  elem.addEventListener('input', event => {
    browser.storage.local.set({borderWidth: parseInt(elem.value)});
  });

  document.getElementById('borderWidthLabel').textContent = browser.i18n.getMessage('borderWidth');
});
