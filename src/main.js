import { app } from 'electron';
import debug from 'electron-debug';
import path from 'path';
import window from 'electron-window';

import installVueDevTools from './util/installVueDevTools';

let mainWindow;

function createWindow() {
  mainWindow = window.createWindow({ width: 800, height: 600 });
  mainWindow.showUrl(path.join(__dirname, '../static/index.html'));
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  if (process.env.NODE_ENV === 'development') {
    installVueDevTools();
  }

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

if (process.env.NODE_ENV === 'development') {
  debug();
}
