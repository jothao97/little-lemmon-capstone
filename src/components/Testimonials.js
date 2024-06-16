import React from "react";
import TestimonialData from "../TestimonialData";

function Testimonials () {
    return (
        <div className="testimonials">
            {
                TestimonialData.map(TestimonialData => <div key={TestimonialData.id}>
                    <img src={Testimonials.image} alt="Testimonial Images"/>

                </div>)
            }
        </div>
    );
}

export default Testimonials;