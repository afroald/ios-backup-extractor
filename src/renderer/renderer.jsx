import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';

import defaultState from './defaultState';

const backupPath = path.resolve('/Users/roald/Development/roald/ios-backup/backup/678cf817d37a66cf63c6a95e72acf5ba588d2c9e');
const stage = document.getElementById('stage');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

function render() {
  const App = require('./components/App').default;
  ReactDOM.render(<AppContainer><App /></AppContainer>, stage);
}

render();

if (module.hot) {
  module.hot.accept(render);
}