import React, { Component } from 'react';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <strong className="left"><i className="fas fa-arrow-left"></i> Go back</strong>
                <div className="center">
                    <a href="/">
                        <img src="logo.png" alt="logo" className="logo"/>
                    </a>
                </div>
                <div className="right">
                    <button className="btn-signup">Sign up</button>
                </div>
            </div>
        );
    }
}

export default Header;