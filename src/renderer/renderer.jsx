import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

// const backupPath = path.resolve('/Users/roald/Development/roald/ios-backup/backup/678cf817d37a66cf63c6a95e72acf5ba588d2c9e');
const stage = document.getElementById('stage');
const app = new App();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

function render() {
  const MainWindow = require('./components/MainWindow').default;
  const windowElement = React.createElement(MainWindow, { app });

  const windowComponent = ReactDOM.render(
    React.createElement(AppContainer, null, windowElement),
    stage
  );
}

render();

if (module.hot) {
  module.hot.accept(render);
}
