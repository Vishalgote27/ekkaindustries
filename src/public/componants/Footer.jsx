import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/allServices" className="text-gray-400 hover:text-white transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Factory Address */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Factory Address</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Gut No.12, Mirzapur Shivas, Tal.Gangapur, Jikthan, Waluj, Sambhajinagar, Maharashtra - 431136
                        </p>
                    </div>

                    {/* Office Address */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Office Address</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Office No.1, Ground Floor, Golden City Centre, Besides Prozone Mall, Chikhalthana
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400">Chh. Sambhajinagar, Maharashtra</p>
                        <p className="text-gray-400">Email:<a href="mailto:ekkagroup.aurangabad@gmail.com">ekkagroup.aurangabad@gmail.com</a></p>
                        <p className="text-gray-400">Phone:<a href="tel:+8767486600" >+918767486600</a></p>
                        {/* <p className="text-gray-400">Email: ekkagroup.aurangabad@gmail.com</p>
                        <p className="text-gray-400">Phone: +91 8767486600</p> */}
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
                                <FaLinkedinIn size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-10 text-center border-t border-gray-700 pt-6">
                    <div className="container mx-auto flex items-center justify-center">
                        <div className="flex items-center sm:gap-5">
                            <p>© 2024 - Ekka Industries | Designed & Developed by</p>
                            <a href="https://techsuryaitsolution.com/" >
                                <img src="/techsuryalogo.png" alt="techsurya" className="h-16 sm:h-11 mr-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
