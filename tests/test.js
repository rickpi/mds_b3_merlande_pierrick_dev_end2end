describe('Uber', function() {

  beforeEach(browser => browser.url('https://www.uber.com/fr/fr/'));

  test('Open Uber Website', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.elementPresent('title')
      .assert.elementPresent('head')
      .end();
  });

  test('Check block login in the header wrapper', function (browser) {
    browser
      .waitForElementVisible('body')
      .useXpath()
      .assert.visible('//*[@id="main"]/nav/div/ul[4]/li[4]/button', 'Sign in button is visible')
      .assert.visible('//*[@id="main"]/nav/div/ul[4]/li[5]/button', 'Sign up button is visible')
      .useCss()
      .end();
  });

  test('Check login block in two sections', function (browser) {
    browser
      .waitForElementVisible('body')
      .useXpath()
      .assert.visible('//*[@id="main"]/nav/div/ul[4]/li[4]/button', 'Sign in button is visible')
      .click('//*[@id="main"]/nav/div/ul[4]/li[4]/button', () => 'Click on sign in button')
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[4]/section/div/div/div/div/div[1]/a', 'Driver sign in button is visible')
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[4]/section/div/div/div/div/div[3]/a', 'Passenger sign in button is visible')
      .useCss()
      .end();
  });
});