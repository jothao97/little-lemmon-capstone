import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logotransparent.svg"
import '../styling/Footer.css';
import BookingPage from "./BookingPage";

function Footer () {
    return (
        <footer>
            <section>

                <div className="company-info">
                    <img src={logo} alt="Little Lemon Logo"/>
                    <p>A family owned mediterranean restaurant</p>
                </div>

                <nav>
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/Reservations" element={BookingPage}>Reservations</Link></li>
                        <li><Link to="/">Order Online</Link></li>
                    </ul>
                </nav>

                <address>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Address: <br/> 123 Chicago Ave, IL</li>
                        <li>Phone: <br/> 1 234-456-7890</li>
                        <li>Email: <br/> littlelemon@lemon.com</li>
                    </ul>
                </address>

                <div className="social-media">
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Tiktok</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}

export default Footer;