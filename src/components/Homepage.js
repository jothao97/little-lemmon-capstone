import React from "react";
import logo from "../images/Logotransparent.svg"
import '../styling/Homepage.css';

function Homepage () {
    return (
        <header className="homepage-header">
            <img src={logo} alt="Little Lemon Logo" className="logo"/>
        </header>
        
    );
}

export default Homepage;