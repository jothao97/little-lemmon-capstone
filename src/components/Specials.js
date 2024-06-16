import React from "react";
import Food from "../Food";
import '../styling/Specials.css';

function Specials () {
    return (
        <div className="cards">
                {
                    Food.map(Food => <div key={Food.id} className="menu-item">
                        
                        <img src={Food.image} alt={Food.title} className="food-image"/>
                            <div className="heading">
                                <h5>{Food.title}</h5>
                                <p className="price">${Food.price}</p>
                            </div>
                            <p className="food-description">{Food.description}</p>
                            <button className="order-btn">Order Now</button>
                    </div>)
                }
        </div>
    );
}

export default Specials;