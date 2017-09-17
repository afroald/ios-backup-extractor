import React, { Component } from 'react';

import Window from './photon/Window';
import { Header } from './photon/Toolbar';
import Button from './photon/Button';
import Icon from './photon/Icon';
import FileTable from './FileTable';


import defaultState from '../defaultState';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <Window>
        <Header title="iOS Backup Extractor">
          <Button>
            <Icon type="folder" />&nbsp;Open
          </Button>
        </Header>
        <FileTable />
      </Window>
    );
  }
}
