import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import BookingHeader from "./components/BookingHeader";
import Hero from "./components/Hero"

function App() {
  return (
    <Router>
      <Homepage/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Menu" element={<Menu/>}></Route>
        <Route path="/Booking" element={<BookingPage/>}></Route>
        <Route path="/Reviews" element={<Testimonials/>}></Route>
      </Routes>
      <BookingHeader/>
      <Hero/>
      <Specials/>
      <About/>
      <Footer/>
    </Router>
  );
}

export default App;
