import React, { Component } from 'react';
import { Label, Grid ,Row , Col } from 'react-bootstrap';

class UsersRow extends Component {


    render() {
        const users = this.props.users.map((el, index) => {
            return (
                <tr key={index}>
                    <td>Equipe</td>
                    <td>Membres</td>
                    <td>Encadrant</td>
                    <td>Sujet</td>
                    <td> </td>
                    <td>15pt</td>
                    <td>15pt</td>
                    <td>20 pt</td>
                    <td><h3><Label>Score Finale </Label> </h3></td>


                </tr>
            )
        });
        return (
            <tbody>
            {users}
            </tbody>
        )
    }
}

export default UsersRow;
