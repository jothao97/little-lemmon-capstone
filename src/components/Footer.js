import React from "react";
import logo from "../images/Logotransparent.svg"

function Footer () {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=""/>
                    <p>A family owned mediterranean restaurant</p>
                </div>
                <div>
                    <h3>Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Menu">Menu</a></li>
                        <li><a href="/BookingPage">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Address: <br/> 123 Chicago Ave, IL</li>
                        <li>Phone: <br/> 1 234-456-7890</li>
                        <li>Email: <br/> littlelemon@lemon.com</li>
                    </ul>
                </div>

                <div>
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