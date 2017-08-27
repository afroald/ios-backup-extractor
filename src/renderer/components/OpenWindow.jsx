import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import Window from './Window';

const styles = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
};

export default class OpenWindow extends Component {
  render() {
    return (
      <Window>
        <div style={styles.center}>
          <RaisedButton label="Open backup" />
        </div>
      </Window>
    );
  }
}
