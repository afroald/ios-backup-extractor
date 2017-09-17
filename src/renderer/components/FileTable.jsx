import React, { Component } from 'react';

import ScrollContainer from './ScrollContainer';

export default class FileTable extends Component {
  render() {
    return (
      <ScrollContainer>
        <table className="table-striped">
          <thead>
            <tr>
              <td>id</td>
              <td>domain</td>
              <td>path</td>
            </tr>
          </thead>
          <tbody>
            {this.props.files.map(file =>
              <tr key={file.id}>
                <td>{file.id}</td>
                <td>{file.domain}</td>
                <td>{file.path}</td>
              </tr>
            )}
          </tbody>
        </table>
      </ScrollContainer>
    );
  }
}
