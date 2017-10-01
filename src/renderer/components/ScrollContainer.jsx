import React, { Component } from 'react';

const style = {
  height: '100%',
  overflow: 'scroll',
}

export default class ScrollContainer extends Component {
  getHeight() {
    return this.element.clientHeight;
  }

  render() {
    return (
      <div style={style} ref={element => this.element = element}>
        {this.props.children}
      </div>
    );
  }
}
