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
      .click('//*[@id="main"]/nav/div/ul[4]/li[4]/button', () => console.log('Click on sign in button'))
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[4]/section/div/div/div/div/div[1]/a', 'Driver sign in button is visible')
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[4]/section/div/div/div/div/div[3]/a', 'Passenger sign in button is visible')
      .useCss()
      .end();
  });

  test('Check login driver section', function (browser) {
    browser
      .waitForElementVisible('body')
      .useXpath()
      .assert.visible('//*[@id="main"]/nav/div/ul[4]/li[4]/button', 'Sign in button is visible')
      .click('//*[@id="main"]/nav/div/ul[4]/li[4]/button', () => console.log('Click on sign in button'))
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[4]/section/div/div/div/div/div[1]/a', 'Driver sign in button is visible')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[4]/section/div/div/div/div/div[1]/a', () => console.log('Click on driver sign in button'))
      .useCss()
      .waitForElementVisible('body')
      .assert.urlContains('https://auth.uber.com/login/', 'URL is correct')
      .assert.urlContains('next_url=https%3A%2F%2Fdrivers.uber.com', 'Redirect URL is correct')
      .assert.visible('#useridInput', 'The input connexion email exist')
      .useXpath()
      .assert.visible('//*[@id="app-body"]/div/div[1]/form/div[2]/button', 'A button to go on next page exist')
      .useCss()
      .end();
  });

  test('Check login passenger section', function (browser) {
    browser
      .waitForElementVisible('body')
      .useXpath()
      .assert.visible('//*[@id="main"]/nav/div/ul[4]/li[4]/button', 'Sign in button is visible')
      .click('//*[@id="main"]/nav/div/ul[4]/li[4]/button', () => console.log('Click on sign in button'))
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[4]/section/div/div/div/div/div[3]/a', 'Passenger sign in button is visible')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[4]/section/div/div/div/div/div[3]/a', () => console.log('Click on passenger sign in button'))
      .useCss()
      .waitForElementVisible('body')
      .assert.urlContains('https://auth.uber.com/login/', 'URL is correct')
      .assert.urlContains('next_url=https%3A%2F%2Fm.uber.com', 'Redirect URL is correct')
      .assert.visible('#mobile', 'The input connexion phone exist')
      .assert.visible('#next-button', 'A button to go on next page exist')
      .useXpath()
      .assert.visible('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a', 'A link to the connection with social medias exist')
      .click('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a', () => console.log('Click on link to connection with social medias'))
      .useCss()
      .waitForElementVisible('body')
      .assert.urlContains('https://auth.uber.com/login/social/', 'URL is correct')
      .assert.urlContains('next_url=https%3A%2F%2Fm.uber.com', 'Redirect URL is correct')
      .useXpath()
      .assert.visible('//*[@id="app-content"]/div/div/div/div/div/a[1]', 'The Facebook connection\'s button exists')
      .useCss()
      .assert.visible('#googleLoginButton', 'The Google connection\'s button exists')
      .end();
  });

  test('Check registration block in two sections', function (browser) {
    browser
      .waitForElementVisible('body')
      .useXpath()
      .assert.visible('//*[@id="main"]/nav/div/ul[4]/li[5]/button', 'Registration button is visible')
      .click('//*[@id="main"]/nav/div/ul[4]/li[5]/button', () => console.log('Click on registration in button'))
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[3]/section/div/div/div/div/div[1]/a', 'Driver registration button is visible')
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[3]/section/div/div/div/div/div[3]/a', 'Passenger registration button is visible')
      .useCss()
      .end();
  });
  
  test('Check registration driver section', function (browser) {
    browser
      .waitForElementVisible('body')
      .useXpath()
      .assert.visible('//*[@id="main"]/nav/div/ul[4]/li[5]/button', 'Registration button is visible')
      .click('//*[@id="main"]/nav/div/ul[4]/li[5]/button', () => console.log('Click on registration button'))
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[3]/section/div/div/div/div/div[1]/a', 'Driver registration button is visible')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[3]/section/div/div/div/div/div[1]/a', () => console.log('Click on driver registration button'))
      .useCss()
      .waitForElementVisible('body')
      .assert.urlContains('https://www.uber.com/a/join-new', 'Redirect URL is correct')
      .useXpath()
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[3]/div/input', 'Input email exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[4]/div/input', 'Input firstname exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[5]/div/input', 'Input lastname exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[6]/div/input', 'Input phone exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[7]/div/input', 'Input password exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[8]/div/div/div[1]/input', 'Input city exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[9]/div/input', 'Input invitation code exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[11]/button', 'Submit button exists')
      .useCss()
      .end();
  });
  
  test('Check registration rider section', function (browser) {
    browser
      .waitForElementVisible('body')
      .useXpath()
      .assert.visible('//*[@id="main"]/nav/div/ul[4]/li[5]/button', 'Registration button is visible')
      .click('//*[@id="main"]/nav/div/ul[4]/li[5]/button', () => console.log('Click on registration button'))
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[3]/section/div/div/div/div/div[3]/a', 'Rider registration button is visible')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[3]/section/div/div/div/div/div[3]/a', () => console.log('Click on rider registration button'))
      .useCss()
      .waitForElementVisible('body')
      .assert.urlContains('https://auth.uber.com/login/?uber_client_name=riderSignUp', 'Redirect URL is correct')
      .assert.visible('#firstName', 'Input firstname exists')
      .assert.visible('#lastName', 'Input lastname exists')
      .assert.visible('#mobile', 'Input phone exists')
      .assert.visible('#email', 'Input email exists')
      .assert.visible('#addPassword', 'Input password exists')
      .assert.visible('#answerForm > button', 'Submit button exists')
      .end();
  });

  test('Check registration rider section', function (browser) {
    browser
      .waitForElementVisible('body')
      .useXpath()
      .assert.visible('//*[@id="main"]/nav/div/ul[4]/li[5]/button', 'Registration button is visible')
      .click('//*[@id="main"]/nav/div/ul[4]/li[5]/button', () => console.log('Click on registration button'))
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[3]/section/div/div/div/div/div[3]/a', 'Rider registration button is visible')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/div[3]/section/div/div/div/div/div[3]/a', () => console.log('Click on rider registration button'))
      .useCss()
      .waitForElementVisible('body')
      .assert.visible('#answerForm > button', 'Submit button exists')
      .click('#answerForm > button', () => console.log('Click on submit button'))
      .assert.urlContains('https://auth.uber.com/login/?uber_client_name=riderSignUp', 'We are not redirected')
      .assert.containsText('#error-caption-mobile', 'This phone number is invalid', 'Error appears on phone field')
      .end();
  });
});