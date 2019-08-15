browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.sendMessage(tab.id, {
    color: 'green'
  });
});
