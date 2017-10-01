import React, { Component } from 'react';

const rowHeight = 23;

const style = {
  table: {
    height: '100%',
    overflow: 'scroll',
    fontSize: '12px',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    alignContent: 'start',
  },
  column: {
    padding: '2px 15px',
    backgroundColor: '#f5f5f4',
    borderRight: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
  },
  cell: {
    height: `${rowHeight}px`,
    padding: '2px 15px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
};

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);

    this.state = {
      range: [0, 0],
      visibleRows: [],
    };
  }

  update() {
    this.contentHeight = (this.props.rows.length + 1) * rowHeight;

    const tableHeight = this.table.clientHeight;
    const numRows = Math.ceil(tableHeight / rowHeight);
    const scrollTop = this.table.scrollTop;

    const start = Math.max(0, (Math.ceil(scrollTop / rowHeight) - 10));
    const end = start + numRows + (10 * 2);

    this.setState({
      start,
      end,
      visibleRows: this.props.rows.slice(start, end),
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.start === this.state.start && nextState.end === this.state.end) {
      return false;
    }

    return true;
  }

  componentWillReceiveProps(props) {
    this.update();
  }

  componentDidMount() {
    this.update();
  }

  render() {
    const contentStyle = {
      ...style.content,
      height: `${this.contentHeight}px`,
      paddingTop: `${this.state.start * rowHeight}px`,
    };

    return (
      <div style={style.table} ref={table => this.table = table} onScroll={this.update}>
        <div style={contentStyle}>
          {/*this.props.columns.map(column =>
            <div key={`column-${column.property}`} style={{...style.cell, ...style.column}}>{column.label}</div>
          )*/}

          {this.state.visibleRows.map((row) =>
            this.props.columns.map(column =>
              <div key={`cell-${row.id}-${column.property}`} style={style.cell}>{row[column.property]}</div>
            )
          )}
        </div>
      </div>
    );
  }
}
