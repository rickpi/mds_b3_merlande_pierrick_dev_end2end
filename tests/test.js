describe('Uber', function() {

  beforeEach(browser => browser.url('https://www.uber.com/fr/fr/'));

  test('Open Uber Website', function (browser) {
    browser
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('title')
      .assert.elementPresent('head')
      .end();
  });

  test('Check block login in the header wrapper', function (browser) {
    browser
      .waitForElementVisible('body', 1000)
      .useXpath()
      .assert.elementPresent('//*[@id="main"]/nav/div/ul[4]/li[4]/button', 'Sign in button exist')
      .assert.elementPresent('//*[@id="main"]/nav/div/ul[4]/li[5]/button', 'Sign up button exist')
      .end();
  });
});