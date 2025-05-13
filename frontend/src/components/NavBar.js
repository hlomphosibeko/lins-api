import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/lobolo-logo.png';
import styles from '../styles/NavBar.module.css';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="mb" fixed='top'>
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-right">
                        <NavLink
                         exact
                         to="/"
                         className={styles.NavLink}
                         activeClassName={styles.Active}>
                            Home
                        </NavLink>
                        <NavLink
                         to="/login"
                         className={styles.NavLink}
                         activeClassName={styles.Active}>
                            Log In
                        </NavLink>
                        <NavLink
                         to="/register"
                         className={styles.NavLink}
                         activeClassName={styles.Active}>
                            Register
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;