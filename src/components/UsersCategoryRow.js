import React, { Component } from 'react';

class UsersCategoryRow extends Component {

    render() {

        return (
            <thead>
            <tr>
                <th className="text-primary"><h5 className="menu-text">Équipe</h5></th>
                <th className="text-primary"><h5 className="menu-text">Membres</h5></th>
                <th className="text-primary"><h5 className="menu-text">Encadrant</h5></th>
                <th className="text-primary"><h5 className="menu-text">Sujet</h5></th>
                <th className="text-primary"><h4> </h4></th>
                <th className="text-primary"><h5 className="final-score"> Communication avec l'encadrant:</h5></th>
                <th className="text-primary"><h5 className="final-score">Avancement:</h5></th>
                <th className="text-primary"><h5 className="final-score">Réalisation de la tâche:</h5></th>
                <th className="text-primary"><h4 className="final-score">Score totale:</h4></th>
            </tr>
            </thead>
        );
    }
}

export default UsersCategoryRow;
