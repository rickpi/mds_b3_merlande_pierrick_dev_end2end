module.exports = {
  'Open Uber Website' : function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('title')
      .assert.elementPresent('head')
      .end();
  }
};