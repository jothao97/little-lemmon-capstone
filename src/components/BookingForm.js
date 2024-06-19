import React, { useState } from "react";

function BookingForm (props) {

    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e.target.value);
    }

    const handleTimesChange = (e) => {
        setTimes(e.target.value);
        props.availableTimes(e.target.value);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date</label>
                            <input id="book-date" value={date} onChange={handleDateChange} type="date" required/>
                        </div>

                        <div>
                            <label htmlFor="book-time">Choose Time</label>
                            <select id="book-time" value={times} onChange={handleTimesChange}>
                                <option value="">Select a Time</option>
                                {props.availableTimes.map(availableTime => (
                                    <option key={availableTime} value={availableTime}>
                                        {availableTime}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id="book-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} type="number" required />
                        </div>

                        <div>
                            <label htmlFor="book-occasion">Occasion</label>
                            <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option value="">Select an Occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value="Make Your Reservation" />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
}

export default BookingForm;
