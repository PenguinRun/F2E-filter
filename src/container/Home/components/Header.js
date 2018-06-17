import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header-area">
                <div className="logo">
                    HaveFun
                </div>
                <div className="search-area">
                    <div className="search-logo">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="search-input-area">
                        Explore your own activites
                    </div>
                </div>
            </header >
        )
    }
}

export default Header;