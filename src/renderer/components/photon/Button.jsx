import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const classes = ['btn', `btn-${this.props.type || 'default'}`];

    if (this.props.size) {
      classes.push(`btn-${this.props.size}`);
    }

    return (
      <button className={classes.join(' ')} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
