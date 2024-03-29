'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var path = require('path');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function () {
  // if (process.platform != 'darwin') {
  //   app.quit();
  // }
  app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800
  });

  mainWindow.loadUrl('file://' + path.resolve(__dirname, '../browser/index.html'));
  mainWindow.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});