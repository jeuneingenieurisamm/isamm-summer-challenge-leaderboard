import React, { Component } from 'react';
import UsersCategoryRow from './UsersCategoryRow';
import UsersRow from './UsersRow';
import { Table } from 'react-bootstrap';
class UsersTable extends Component {

    render() {
        return (
        <div>
          <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>

    </tbody>
  </Table>
        </div>
        );
    }
}



export default UsersTable;
