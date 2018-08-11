import React, { Component } from 'react';

class UsersCategoryRow extends Component {

    render() {

        return (
            <thead>
            <tr>
                <th className="text-primary"><h4 className="menu-text">Équipe</h4></th>
                <th className="text-primary"><h4 className="menu-text">Membres</h4></th>
                <th className="text-primary"><h4 className="menu-text">Encadrant</h4></th>
                <th className="text-primary"><h4 className="menu-text">Sujet</h4></th>
                <th className="text-primary"><h4> </h4></th>
                <th className="text-primary"><h5 className="menu-text-2"> Communication avec l'encadrant:</h5></th>
                <th className="text-primary"><h5 className="menu-text-2">Avancement:</h5></th>
                <th className="text-primary"><h5 className="menu-text-2">Réalisation de la tâche:</h5></th>
                <th className="text-primary"><h3 className="final-score">Score totale:</h3></th>
            </tr>
            </thead>
        );
    }
}

export default UsersCategoryRow;
