import React, { Component } from 'react';
import Table from './Table';

export default class FileTable extends Component {
  render() {
    const props = {
      columns: [
        { label: 'ID', property: 'id' },
        { label: 'Domain', property: 'domain' },
        { label: 'Path', property: 'path' }
      ],
      rows: this.props.files
    };

    return (
      <Table {...props} />
    );
  }
}
