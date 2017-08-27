import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import OpenWindow from './OpenWindow.jsx';
import defaultState from '../defaultState';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    const Window = OpenWindow;

    return (
      <MuiThemeProvider>
        <Window />
      </MuiThemeProvider>
    );
  }
}
