import React, { Component } from 'react';

export default class Icon extends Component {
  render() {
    return (
      <span className={`icon icon-${this.props.type}`}></span>
    );
  }
}