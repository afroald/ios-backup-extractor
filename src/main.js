import { app, ipcMain } from 'electron';
import debug from 'electron-debug';
import path from 'path';
import window from 'electron-window';

import defaultState from './defaultState';

// import openDialog from './openDialog';
import installVueDevTools from './util/installVueDevTools';

let mainWindow;
let state;

function resetState() {
  console.log('Resetting state');
  state = Object.assign({}, defaultState);
  console.log('State:');
  console.log(state);
}

function createWindow() {
  resetState();
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

ipcMain.on('state:update', (event) => {
  event.sender.send('state:update', state);
});

ipcMain.on('backup:open', (event) => {

});
