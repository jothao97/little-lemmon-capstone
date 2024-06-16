import React from "react";
import { Link } from "react-router-dom";

function Nav () {
    return (
        <nav className="navbar">
            <ul>
                <li className="navitem">
                    <Link to="/">Home</Link>
                </li>
                <li className="navitem">
                    <Link to="/About">About</Link>
                </li>
                <li className="navitem">
                    <Link to="/">Menu</Link>
                </li>
                <li className="navitem">
                    <Link to="/BookingPage">Reservations</Link>
                </li>
                <li className="navitem">
                    <Link to="/">Order Online</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
