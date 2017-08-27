import React, { Component } from 'react';

const style = {
  width: '100%',
  height: '100%',
};

export default class Window extends Component {
  render() {
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}
