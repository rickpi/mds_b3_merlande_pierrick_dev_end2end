module.exports = {
  src_folders: ['tests'],
  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: 'hub-cloud.browserstack.com',
    port: 80
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        'browserstack.user': 'pierrickmerlande1',
        'browserstack.key': 'qTsAa9hsFu3mYy3nzu53',
        'browser': 'chrome',
      }
    }
  }
};