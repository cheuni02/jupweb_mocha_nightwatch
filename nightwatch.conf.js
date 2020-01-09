module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ['tests'],
  
    webdriver: {
      start_process: true,
      port: 9515,
      server_path: require('chromedriver').path,
      cli_args: [
        // very verbose geckodriver logs
        // '-vv'
      ]
    },

    test_settings: {

      default: {
        launch_url: 'https://test.jupiter.bbc.co.uk/',
        desiredCapabilities : {
          browserName : 'chrome',
          alwaysMatch: {
            // Enable this if you encounter unexpected SSL certificate errors in Firefox
            // acceptInsecureCerts: true,
            // 'moz:firefoxOptions': {
            //   args: [
            //     // '-headless',
            //     // '-verbose'
            //   ],
            // }
          }
        }
      },

      chrome: {
        desiredCapabilities : {
          browserName : 'chrome',
          alwaysMatch: {
            acceptInsecureCerts: false
          }
        },
        webdriver: {
          port: 9515,
          start_process: true,
          server_path: require('chromedriver').path
        }
      },

      safari: {
        desiredCapabilities : {
          browserName : 'safari',
          alwaysMatch: {
            acceptInsecureCerts: false
          }
        },
        webdriver: {
          port: 4445,
          start_process: true,
          server_path: '/usr/bin/safaridriver'
        }
      },
  
      firefox: {
        desiredCapabilities : {
          browserName : 'firefox'
        },
  
        webdriver: {
          start_process: true,
          port: 4444,
          server_path: require('geckodriver').path
        }
      },

    //   selenium: {
    //     // Selenium Server is running locally and is managed by Nightwatch
    //     // selenium: {
    //     //   start_process: true,
    //     //   port: 4444,
    //     //   server_path: require('selenium-server').path,
    //     //   cli_args: {
    //     //     'webdriver.gecko.driver': require('geckodriver').path,
    //     //     'webdriver.chrome.driver': require('chromedriver').path
    //     //   }
    //     // },
    //     webdriver: {
    //       start_process: true
    //     }
    //   },

      'selenium.chrome': {
        extends: 'selenium',
        desiredCapabilities: {
          browserName: 'chrome',
          chromeOptions : {
            w3c: false
          }
        }
      },
  
      'selenium.firefox': {
        extends: 'selenium',
        desiredCapabilities: {
          browserName: 'firefox'
        }
      }
    },

    page_objects_path: [
        "./page_objects"
    ] 

  };
  
  