import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const {
      style,
      size,
      children,
      ...props
    } = this.props;

    const classes = ['btn', `btn-${style || 'default'}`];

    if (this.props.size) {
      classes.push(`btn-${size}`);
    }

    return (
      <button className={classes.join(' ')} {...props}>
        {children}
      </button>
    );
  }
}
