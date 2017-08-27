import React from 'react';
import { render } from 'react-dom';
import MainWindow from './components/MainWindow.jsx';

render(
  React.createElement(MainWindow),
  document.getElementById('stage'),
);
