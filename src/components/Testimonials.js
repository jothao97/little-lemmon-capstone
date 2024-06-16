import React from "react";
import TestimonialData from "../TestimonialData";
import "../styling/Testimonials.css";

function Testimonials () {
    return (
        <div className="testimonials-container">
            {
                TestimonialData.map(item => (
                    <div key={item.id}>
                        <img src={item.image} alt="Testimonials Images" className="testimonials-image"/>
                        <div className="testimonials">
                            <h4>{item.name}</h4>
                            <p>{item.review}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Testimonials;
