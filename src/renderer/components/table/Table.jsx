import React, { Component } from 'react';
import TableHeader from './TableHeader';

const rowHeight = 23;

const style = {
  table: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    fontSize: '12px',
  },
  viewport: {
    flexGrow: '1',
    overflow: 'scroll',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    alignContent: 'start',
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
    const scrollTop = this.viewport.scrollTop;

    const start = Math.max(0, (Math.ceil(scrollTop / rowHeight) - 10));
    const end = start + numRows + (10 * 2);

    this.setState({
      start,
      end,
      visibleRows: this.props.rows.slice(start, end),
    });
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
        <TableHeader columns={this.props.columns} />

        <div style={style.viewport} ref={viewport => this.viewport = viewport}>
          <div style={contentStyle}>
            {this.state.visibleRows.map((row) =>
              this.props.columns.map(column =>
                <div key={`cell-${row.id}-${column.property}`} style={style.cell}>{row[column.property]}</div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
