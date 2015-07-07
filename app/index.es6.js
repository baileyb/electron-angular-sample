let app = require('app');
let BrowserWindow = require('browser-window');
let path = require('path');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', () => {
  // if (process.platform != 'darwin') {
  //   app.quit();
  // }
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  mainWindow.loadUrl('file://' + path.resolve(__dirname, '../browser/index.html'));
  mainWindow.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
