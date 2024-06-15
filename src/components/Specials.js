import React from "react";
import Food from "../Food";

function Specials () {
    return (
        <div className="cards">
                {
                    Food.map(Food => <div key={Food.id} className="menu-items">
                        
                        <img src={Food.image} alt=''/>
                            <div className="heading">
                                <h5>{Food.title}</h5>
                                <p>${Food.price}</p>
                            </div>
                            <p>{Food.description}</p>
                            <button className="orderbtn">Order Now</button>
                    </div>)
                }
        </div>
    );
}

export default Specials;