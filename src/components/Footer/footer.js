import React from 'react';
import './footer.css';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footerSec'>
                <div className='footerContainer'>
                    <div className='footerSlide'>
                        <h3>Quick Links</h3>
                        <RouterLink to="/"><i class="fa-solid fa-house"></i> Home</RouterLink>
                        <RouterLink to="/workflow"><i class="fa-solid fa-house"></i> Workflow</RouterLink>
                        <RouterLink to="/tracker"><i class="fa-brands fa-servicestack"></i> Track</RouterLink>
                    </div>
                    <div className='footerSlide'>
                        <h3>Branches</h3>
                        <a href='#'>Delhi</a>
                        <a href='#'>Kolkata</a>
                        <a href='#'>Mumbai</a>
                        <a href='#'>Chennai</a>
                    </div>
                    <div className='footerSlide'>
    <h3>Contact Info</h3>
    <a href='#' className="phone-link"><i class="fa-solid fa-phone-flip"></i> +123-456-7890</a>
    <a href='#' className="email-hover"><i class="fa-solid fa-envelope"></i> prashantanandgdd@gmail.com</a>
    <a href='#' className="map-link"><i class="fa-solid fa-map"></i> Kolkata, India - 700107</a>
</div>

                    <div className='footerSlide'>
                        <h3>Follow Us</h3>
                         {/* Member 1 Contact Info */}
                        <a href="https://www.linkedin.com/in/prashant-anand2oo3"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
                        <a href="https://github.com/PrashantAnand03"><i class="fa-brands fa-github"></i> Github</a>
                        <a href="https://twitter.com/PrashanAnand"><i class="fa-brands fa-twitter"></i> Twitter</a>
                    </div>
                </div>
                <p>Copywright &#169; JARVIS 404.Crafted with <i class="fa-solid fa-heart"></i> By Team JARVIS 404</p>
            </div>
        </footer>
    );
}

export default Footer;