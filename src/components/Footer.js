import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';
import '../index.css'; 

const Footer = () => {
    return (
        <footer className="text-white py-6 border-b border-t-2">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-4 md:w-11/12 md:mx-auto">
                    <div className="mb-4 md:mb-0">
                        <img src={logo} className="h-20 mx-auto md:mx-0" alt="Logo" />
                    </div>
                    <div className="space-x-0 md:space-x-1 mb-4 md:mb-0 text-center md:text-left space-y-2 md:ml-28">
                        <a href="/" className="hover:bg-gradient-to-r from-purple-300 to-blue-700 px-4 hover:text-black block md:inline hover:rounded-md md:text-xl">About</a>
                        <a href="/" className="hover:bg-gradient-to-r from-purple-300 to-blue-700 px-4 hover:text-black block md:inline hover:rounded-md md:text-xl ">Contact</a>
                        <a href="/" className="hover:bg-gradient-to-r from-purple-300 to-blue-700 px-4 hover:text-black block md:inline hover:rounded-md md:text-xl ">Tutorial</a>
                    </div>
                    <div className="flex justify-center md:justify-start space-x-4 sm:space-x-3 xs:space-x-2">
                        <a href="https://www.facebook.com" className="icons" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" className="icons" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" className="icons" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com" className="icons" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="text-sm text-center">
                    &copy; {new Date().getFullYear()} DSA & Dev. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
