import React from "react";
import BookingForm from "./BookingForm";
import "../styling/BookingPage.css" 


function BookingPage (props) {
    return (
        <div className="booking-container">
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitFormu={props.SubmitForm}/>
        </div>
    )
}

export default BookingPage;