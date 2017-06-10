import { app } from 'electron';
import path from 'path';
import window from 'electron-window';

let mainWindow;

function createWindow() {
  mainWindow = window.createWindow({ width: 800, height: 600 });
  mainWindow.showUrl(path.join(__dirname, '../static/index.html'));
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

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
