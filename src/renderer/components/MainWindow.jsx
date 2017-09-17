import React, { Component } from 'react';
import { remote } from 'electron';

import Window from './photon/Window';
import { Header } from './photon/Toolbar';
import Button from './photon/Button';
import Icon from './photon/Icon';
import FileTable from './FileTable';
import UnlockForm from './UnlockForm';

function noop() {}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.app = props.app;
    this.state = this.app.getState();

    this.app.onStateChange((newState) => {
      this.setState(newState);
    });
  }

  componentWillUnmount() {
    this.app.onStateChange(null);
  }

  render() {
    const content = this.state.locked ?
      <UnlockForm onUnlock={this.app.unlock}/> :
      <FileTable files={this.state.files}/>;

    return (
      <Window>
        <Header title="iOS Backup Extractor">
          <Button onClick={this.app.openBackup}>
            <Icon type="folder" />&nbsp;Open
          </Button>
          {this.state.status}
        </Header>
        {content}
      </Window>
    );
  }
}
