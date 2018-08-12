import React from 'react';
import { Navbar } from 'react-bootstrap';
import Image from '../logo.png'

const Header = () => {
    return (
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><span className="navItem">ISAMM SUMMER CHALLENGE Leaderboard </span> </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text pullRight><span className="navItem">Happy coding! </span></Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;