import { app, ipcMain } from 'electron';
import Backup from 'ios-backup';
import debug from 'electron-debug';
import path from 'path';
import window from 'electron-window';

// import openDialog from './openDialog';
import installVueDevTools from './util/installVueDevTools';

let backup;
let mainWindow;

function createWindow() {
  mainWindow = window.createWindow({ width: 800, height: 600 });
  mainWindow.showUrl(path.join(__dirname, '../static/index.html'));
  mainWindow.on('closed', () => {
    backup = null;
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

ipcMain.on('backup:open', (event, backupPath) => {
  event.sender.send('backup:state', 'opening');
  // Backup.create(backupPath)
  //   .then((openedBackup) => {
  //     backup = openedBackup;
  //   })
  //   .catch((error) => {
  //   });
});

if (process.env.NODE_ENV === 'development') {
  debug();
}
