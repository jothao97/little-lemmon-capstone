import React from "react";
import { Link } from "react-router-dom";
import BookingPage from "./BookingPage";
import '../styling/BookingHeader.css';

function BookingHeader () {
    return(
        <div className="booking-header">
            <header>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p className="booking-description">Step into a world of culinary mastery and refined luxury at Little Lemon, where every dish tells a story of passion and perfection.
                    Nestled in the heart of Chicago, our award-winning chefs blend innovation with tradition, crafting exquisite meals that tantalize the senses.
                </p><br/>
            </header>
            <button className="reservation-button">
                <Link to={BookingPage}> Reservations</Link>
            </button>
        </div>
    );
}

export default BookingHeader;