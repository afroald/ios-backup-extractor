import React, { Component } from 'react';

const style = {
  height: '100%',
  overflow: 'scroll',
}

export default class ScrollContainer extends Component {
  render() {
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}
