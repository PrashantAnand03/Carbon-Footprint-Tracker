import React, { useState } from "react";
import './navbar.css';
import profilePic from '../../assets/profilePic.png';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    const user = false;
    const [isOpen, setIsOpen] = useState(false); // State for toggling the menu

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu open/close
    };

    return (
        <div className='nav'>
            {/* Left section always visible */}
            <div className='left'>
                <RouterLink to="/">
                    <h3 className="novo">Tracker.</h3>
                    <p className="novo">Explore<span> More</span></p>
                </RouterLink>
            </div>

            {/* Middle section for links */}
            <div className={`middle ${isOpen ? 'open' : ''}`}>
                {/* Links that are always visible on larger screens */}
                <li>
                    <RouterLink to="/" className='middlelink'>HOME</RouterLink>
                </li>
                <li>
                    <RouterLink to="/workflow" className='middlelink'>WORKFLOW</RouterLink>
                </li>
                <li>
                    <RouterLink to="/tracker" className='middlelink'>TRACKER</RouterLink>
                </li>

                {/* Right section for user profile */}
                <div className='right'>
                    {user ? (
                        <div className='sub-right1'>
                            <img className='right-img' src={profilePic} alt='' height={50} width={50} />
                            <li>
                                <RouterLink to="/" className='rightlink'>{user && 'LOGOUT'}</RouterLink>
                            </li>
                        </div>
                    ) : (
                        <div className='right2'>
                            <li>
                                <RouterLink to="/login" className='rightlink'>LOGIN</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/register" className='rightlink'>REGISTER</RouterLink>
                            </li>
                        </div>
                    )}
                </div>
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

             {/* Hamburger Menu - displayed on small screens */}
             {isOpen && (
                <div className="hamburger-menu">
                    <ul className='mobile-links'> {/* Change to ul for better semantics */}
                        <li>
                            <RouterLink to="/" className='middlelink'>HOME</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/workflow" className='middlelink'>WORKFLOW</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/tracker" className='middlelink'>TRACKER</RouterLink>
                        </li>
                        <li className='mobile-user'>
                            {user ? (
                                <div className='sub-right1'>
                                    <img className='right-img' src={profilePic} alt='' height={30} width={30} />
                                    <RouterLink to="/" className='rightlink'>{user && 'LOGOUT'}</RouterLink>
                                </div>
                            ) : (
                                <>
                                    <li>
                                        <RouterLink to="/login" className='rightlink'>LOGIN</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/register" className='rightlink'>REGISTER</RouterLink>
                                    </li>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
