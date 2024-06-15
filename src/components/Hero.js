import React from "react";
import { Link } from "react-router-dom";

function Hero () {
    return (
        <div>
            <h1>Check out our Specials</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Feugiat pretium nibh ipsum consequat.
            </p>
            <Link to="/Specials">
                <button>Specials</button>
            </Link>
        </div>
    );
}

export default Hero;