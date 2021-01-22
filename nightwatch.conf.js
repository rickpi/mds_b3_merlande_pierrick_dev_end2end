module.exports = {
  src_folders: ['tests'],
  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: 'hub-cloud.browserstack.com',
    port: 80,
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        'os': 'WINDOWS',
        'os_version': '10',
        'resolution': '1366x768',
        'browserstack.user': 'pierrickmerlande1',
        'browserstack.key': 'qTsAa9hsFu3mYy3nzu53',
        'browser': 'chrome',
        "chromeOptions": {
          'args': ['start-maximized']
        }
      }
    }
  }
};