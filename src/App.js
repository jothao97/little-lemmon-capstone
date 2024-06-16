import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import BookingHeader from "./components/BookingHeader";
import Hero from "./components/Hero"
import Specials from "./components/Specials";
import About from "./components/About";
import Footer from "./components/Footer";
// import BookingPage from "./components/BookingPage";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <Router>
      <Homepage/>
      <Nav/>
      <Routes>
        <Route path="/About" element={<About/>}>About</Route>
        <Route path="/">Menu</Route>
        <Route path="/BookingForm" element={<BookingForm/>}>Reservations</Route>
        <Route path="/Reviews" element={<Testimonials/>}>Reviews</Route>
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
