/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from './MenuItems'
import './Navbar.css'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Portfolio Calculator <i className="fas fa-dollar-sign"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    <b>{item.title}</b>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Link to='/import-file'>
                    <Button><b>Import File</b></Button>
                </Link>
                
            </nav>
        )
    }
}

export default Navbar