import React, { Component } from 'react';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.additionalClass = '';
  }

  render() {
    return (
      <div className={`toolbar ${this.additionalClass}`}>
        {this.props.title && <h1 className="title">{this.props.title}</h1>}
        {this.props.children && <div className="toolbar-actions">{this.props.children}</div>}
      </div>
    );
  }
}

export class Header extends Toolbar {
  constructor(props) {
    super(props);

    this.additionalClass = 'toolbar-header';
  }
}

export class Footer extends Toolbar {
  constructor(props) {
    super(props);

    this.additionalClass = 'toolbar-footer';
  }
}
