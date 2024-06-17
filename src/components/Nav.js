import React from "react";
import { NavLink } from "react-router-dom";
import '../styling/Nav.css';
// import BookingForm from "./BookingForm";
import BookingPage from "./BookingPage";

function Nav () {
    return (
        <nav className="navbar">
            <ul className="navlist">
                <li className="navitem">
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li className="navitem">
                    <NavLink to="/About">About</NavLink>
                </li>
                <li className="navitem">
                    <NavLink to="/">Menu</NavLink>
                </li>
                <li className="navitem">
                    <NavLink to="/Reservations" element={BookingPage}>Reservations</NavLink>
                </li>
                <li className="navitem">
                    <NavLink to="/">Order Online</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
