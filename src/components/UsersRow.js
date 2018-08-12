import React, { Component } from 'react';
import { Label, Grid ,Row , Col } from 'react-bootstrap';

class UsersRow extends Component {


    render() {
        const users = this.props.teams.map((el, index) => {
            return (
                <tr key={index}>
                    <td>{el.teamName}</td>
                    <td>{el.membres }</td>
                    <td>{el.encadrant}</td>
                    <td>{el.sujet}</td>
                    <td> </td>
                    <td>{el.score_communication_encadrant}pt</td>
                    <td>{el.score_avancement}pt</td>
                    <td>{el.score_realisation_tache}pt</td>
                    <td><h3><Label>Score Finale : {el.score_totale} </Label> </h3></td>


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
