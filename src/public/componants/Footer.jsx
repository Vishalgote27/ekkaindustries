import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-10">

                    {/* Links Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="text-gray-400">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/about" className="hover:underline">About us</a></li>
                            <li><a href="/allServices" className="hover:underline">Services</a></li>
                            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Factory Address</h3>
                        <p className="text-gray-400">
                            Gut No.12, Mirzapur Shivas, Tal.Gangapur, Jikthan, Waluj, Sambhajinagar Maharashtra - 431136
                        </p>
                    </div>


                    {/* Office Add */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Office Address</h3>
                        <p className="text-gray-400">
                            Office No.1, Ground floor, Golden City Centre, Besides Prozone mall, Chikhalthana
                        </p>
                    </div>


                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400">Chh. Sambhajinagar, Maharashtra</p>
                        <p className="text-gray-400">ekkagroup.aurangabad@gmail.com</p>
                        <p className="text-gray-400">Phone: +91 8767486600</p>
                    </div>


                    {/* social media*/}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 ">Social Media </h3>
                        <div className="mt-6 flex  space-x-4">

                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                                <FaFacebookF />
                            </a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                                <FaInstagram />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>


                </div>



                {/* Copyright Section */}
                <div className="mt-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
