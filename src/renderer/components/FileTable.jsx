import React, { Component } from 'react';

export default class FileTable extends Component {
  render() {
    return (
      <table className="table-striped">
        <thead>
          <tr>
            <td>Name</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    );
  }
}