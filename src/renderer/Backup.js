import { ipcRenderer } from 'electron';

let delegate = null;

const Backup = {
  setDelegate(newDelegate) {
    delegate = newDelegate;
  },

  open(backupPath) {
    ipcRenderer.send('backup:open', backupPath);
  },
};

ipcRenderer.on('backup:state', (event, newState) => {
  delegate.state = newState;
});

export default Backup;
