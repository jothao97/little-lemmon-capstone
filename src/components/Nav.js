import React, {useState} from "react";

function Nav () {
    return (
        <nav className="navbar">
            <ul>
                <li className="navitem">
                    <link to="/">Home</link>
                </li>
                <li className="navitem">
                    <link to="/About">About</link>
                </li>
                <li className="navitem">
                    <link to="/Menu">Menu</link>
                </li>
                <li className="navitem">
                    <link to="/BookingPage">Booking</link>
                </li>
                <li className="navitem">
                    <link to="/">Order Online</link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
