import React, { Component } from 'react';
import { Window } from 'react-desktop/macOs';

import defaultState from '../defaultState';

export default class MainWindow extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <Window>
        Test: {this.state.backup}
      </Window>
    );
  }
}
