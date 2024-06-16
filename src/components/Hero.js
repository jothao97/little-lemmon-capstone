import React from "react";
import { Link } from "react-router-dom";
import Specials from "./Specials";
import '../styling/Hero.css';

function Hero () {
    return (
        <div className="hero-container">
            <h1>Check out our Specials</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Feugiat pretium nibh ipsum consequat.
            </p><br/>
            <Link to={Specials}>
                <button className="hero-button">Specials</button>
            </Link>
        </div>
    );
}

export default Hero;