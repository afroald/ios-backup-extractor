
import 'keen-ui/src/bootstrap';
import { ipcRenderer } from 'electron';
import Vue from 'vue';

import App from './components/App.vue';

const app = new Vue(Object.assign({ el: '#stage' }, App));

window.app = app;

ipcRenderer.on('state:update', (event, newState) => {
  console.log('Updating state', newState);
  app.state = newState;
});

ipcRenderer.send('state:update');
