import Backup from 'ios-backup';
import injectTapEventPlugin from 'react-tap-event-plugin';
import path from 'path';
import React from 'react';
import { render } from 'react-dom';

import defaultState from './defaultState';
import App from './components/App.jsx';

const backupPath = path.resolve('/Users/roald/Development/roald/ios-backup/backup/678cf817d37a66cf63c6a95e72acf5ba588d2c9e');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  React.createElement(App),
  document.getElementById('stage'),
);
