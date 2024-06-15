import React from "react";
import { Link } from "react-router-dom";
import BookingPage from "./BookingPage";

function BookingHeader () {
    return(
        <div>
            <header>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranead restaurant, focused on traditional recipes served with a modern twist</p>
            </header>
            <button>
                <Link to={BookingPage}/> Reservations
            </button>
        </div>
    );
}

export default BookingHeader;