import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <ul>
                            <li><a href="#">New York Times Article Search</a></li>
                            <li><a onClick={() => window.location.replace("/")}>Home</a></li>
                            <li><NavLink to="/saved">Saved</NavLink></li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav
