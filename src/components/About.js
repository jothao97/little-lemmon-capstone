import React from "react";
import patio from "../images/patio.jpg"
import chefcook from "../images/chefcook.jpg"

function About () {
    return (
        <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Feugiat pretium nibh ipsum consequat. Iaculis eu non diam phasellus.
                Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Vitae congue mauris rhoncus aenean vel elit scelerisque.
                Augue ut lectus arcu bibendum at varius vel pharetra. Sit amet luctus venenatis lectus. Sit amet consectetur adipiscing elit.
                Libero enim sed faucibus turpis. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.
            </p>
            <img src={patio}></img>
            <img src={chefcook}></img>
        </div>
        
    );
}

export default About;