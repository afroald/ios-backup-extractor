import React, { Component } from 'react';

import Window from './photon/Window';
import { Header } from './photon/Toolbar';
import defaultState from '../defaultState';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
        <Window>
          <Header title="Test">
            Test
          </Header>
        </Window>
    );
  }
}
