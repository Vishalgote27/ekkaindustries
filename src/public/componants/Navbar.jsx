import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Get the current route location
    const location = useLocation();

    // Determine the active link based on current URL path
    const activeLink = location.pathname;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black text-white p-4 fixed w-full top-0 left-0 z-50 shadow-md">
            <div className="container mx-auto  flex justify-between items-center">
                {/* Logo */}
                <div>
                    <Link to="/" className="text-2xl font-bold">
                        Ekaa
                    </Link>
                </div>

                {/* Nav Links (hidden on small screens) */}
                <div className="hidden md:flex space-x-8 ">
                    <Link
                        to="/"
                        className={`flex items-center space-x-2 hover:text-white transition duration-300 ${activeLink === '/' ? 'border-b-2 border-[#CA9B6B]' : ''}`}
                    >
                        <span>Home</span>
                    </Link>
                    <Link
                        to="/about"
                        className={`flex items-center space-x-2 hover:text-white transition duration-300 ${activeLink === '/about' ? 'border-b-2 border-[#CA9B6B]' : ''}`}
                    >
                        <span>About Us</span>
                    </Link>
                    <Link
                        to="/products"
                        className={`flex items-center space-x-2 hover:text-white transition duration-300 ${activeLink === '/products' ? 'border-b-2 border-[#CA9B6B]' : ''}`}
                    >
                        <span>Products</span>
                    </Link>
                    <Link
                        to="/allServices"
                        className={`flex items-center space-x-2 hover:text-white transition duration-300 ${activeLink === '/allServices' ? 'border-b-2 border-[#CA9B6B]' : ''}`}
                    >
                        <span>Services</span>
                    </Link>
                    <Link
                        to="/contact"
                        className={`flex items-center space-x-2 hover:text-white transition duration-300 ${activeLink === '/contact' ? 'border-b-2 border-[#CA9B6B]' : ''}`}
                    >
                        <span>Contact</span>
                    </Link>
                </div>

                {/* Contact Us Button (hidden on small screens) */}
                {/* <div className="hidden lg:block">
                    <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center transition duration-300">
                        <FaPhoneAlt className="mr-2" /> Contact Us
                    </Link>
                </div> */}

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black bg-white rounded-full w-10 h-10 flex justify-center items-center font-extrabold text-2xl">
                        <IoMenu />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4">
                    <Link
                        onClick={toggleMenu}
                        to="/"
                        className={`block px-4 py-2 text-sm hover:text-gray-500 transition duration-300 ${activeLink === '/' ? 'border-b-2 border-[#CA9B6B]' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        onClick={toggleMenu}
                        to="/about"
                        className={`block px-4 py-2 text-sm hover:text-gray-500 transition duration-300 ${activeLink === '/about' ? 'border-b-2 border-[#CA9B6B]' : ''}`}
                    >
                        About Us
                    </Link>
                    <Link
                        onClick={toggleMenu}
                        to="/products"
                        className={`block px-4 py-2 text-sm hover:text-gray-500 transition duration-300 ${activeLink === '/products' ? 'border-b-2 border-[#CA9B6B]' : ''}`}
                    >
                        Products
                    </Link>
                    <Link
                        onClick={toggleMenu}
                        to="/allServices"
                        className={`block px-4 py-2 text-sm hover:text-gray-500 transition duration-300 ${activeLink === '/allServices' ? 'border-b-2 border-[#CA9B6B]' : ''}`}
                    >
                        Services
                    </Link>

                    <Link
                        onClick={toggleMenu}
                        to="/contact"
                        className={`block px-4 py-2 text-sm hover:text-gray-500 transition duration-300 ${activeLink === '/contact' ? 'border-b-2 border-[#CA9B6B]' : ''}`}
                    >
                        Contact
                    </Link>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
