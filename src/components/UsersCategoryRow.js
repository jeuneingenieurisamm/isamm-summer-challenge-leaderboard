import React, { Component } from 'react';

class UsersCategoryRow extends Component {

    render() {

        return (
            <thead>
            <tr>
                <th className="text-primary"><h4>Équipe</h4></th>
                <th className="text-primary"><h4>Membres</h4></th>
                <th className="text-primary"><h4>Encadrant</h4></th>
                <th className="text-primary"><h4>Sujet</h4></th>
                <th className="text-primary"><h4> </h4></th>
                <th className="text-primary"><h5> Communication avec l'encadrant:</h5></th>
                <th className="text-primary"><h5>Avancement  :</h5></th>
                <th className="text-primary"><h5>Réalisation de la tâche  :</h5></th>
                <th className="text-primary"><h3>Score totale : </h3></th>
            </tr>
            </thead>
        );
    }
}

export default UsersCategoryRow;
