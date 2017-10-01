import React, { Component } from 'react';

const style = {
  header: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    backgroundColor: '#f5f5f4',
  },
  column: {
    padding: '2px 15px',
    borderRight: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
  },
};

export default class TableHeader extends Component {
  render() {
    return (
      <div style={style.header}>
        {this.props.columns.map(column =>
          <div key={column.property} style={style.column}>{column.label}</div>
        )}
      </div>
    );
  }
}
