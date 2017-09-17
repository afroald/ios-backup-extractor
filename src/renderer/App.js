import { remote } from 'electron';

import defaultState from './defaultState';
import showOpenDialog from './showOpenDialog';

const { getCurrentWindow } = remote;

function noop() {}

export default function App() {
  let stateChangeCallback = noop;
  let state = Object.assign({}, defaultState);

  function updateState(newState) {
    state = Object.assign(state, newState);

    if (stateChangeCallback) {
      stateChangeCallback(state);
    }
  }

  this.openBackup = function openBackup() {
    try {
      const path = showOpenDialog(getCurrentWindow());
      updateState({ path });
    } catch (error) {
      console.log(error);
    }
  };

  this.getState = function getState() {
    return state;
  };

  this.onStateChange = function onStateChange(callback) {
    stateChangeCallback = callback;
  };
}
