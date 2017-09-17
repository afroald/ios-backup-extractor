import Backup from 'ios-backup';
import { remote } from 'electron';

import defaultState from './defaultState';
import showOpenDialog from './showOpenDialog';

const { getCurrentWindow } = remote;

function noop() {}

export default function App() {
  let stateChangeCallback = noop;
  let backup = null;
  let state = Object.assign({}, defaultState);

  function updateState(newState) {
    state = Object.assign(state, newState);
    console.log(state);

    if (stateChangeCallback) {
      stateChangeCallback(state);
    }
  }

  this.openBackup = function openBackup() {
    try {
      const path = showOpenDialog(getCurrentWindow());

      updateState({ status: 'opening' });

      Backup.create(path)
        .then((newBackup) => {
          backup = newBackup;
          updateState({
            status: 'opened',
            locked: backup.isEncrypted,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  this.unlock = function unlock(password) {
    updateState({ status: 'unlocking' });
    backup.unlock(password)
      .then(() => {
        updateState({
          status: 'opened',
          locked: false,
        });

        return backup.files();
      })
      .then((files) => {
        updateState({ files });
      });
  };

  this.getState = function getState() {
    return state;
  };

  this.onStateChange = function onStateChange(callback) {
    stateChangeCallback = callback;
  };
}
