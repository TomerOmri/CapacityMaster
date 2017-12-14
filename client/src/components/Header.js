import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <nav>
                <div className="nav-wrapper #0288d1 light-blue darken-2">
                    <a className="left brand-logo"> EmailService </a>
                    <ul className="right">
                        <li>
                            <a>Login with Google</a>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;


