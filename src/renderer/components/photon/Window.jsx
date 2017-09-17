import React, { Component } from 'react';

export default class Window extends Component {
    render() {
        return (
            <div className="window">
                {this.props.children}
            </div>
        );
    }
}