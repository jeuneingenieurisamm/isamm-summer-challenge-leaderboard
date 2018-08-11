import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
        <Jumbotron>
        <footer className="text-center">
            <h3 className="menu-text">"Talent wins games, but teamwork and intelligence win championships." --Michael Jordan </h3>
        </footer>
       
        </Jumbotron>
        <p className="final-score"> Made by &hearts;  j2i Team </p>
        </div>
    );
};

export default Footer;
