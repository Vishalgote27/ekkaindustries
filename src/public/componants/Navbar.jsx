import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
        <nav className="bg-white text-gray-800 px-10 py-1 fixed w-full top-0 left-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div>
                    <Link to="/" className="text-2xl font-bold">
                        <img src="/removebglogo.png" alt="Logo" className="h-14 w-16" />
                    </Link>
                </div>

                {/* Nav Links (hidden on small screens) */}
                <div className="hidden md:flex space-x-8">
                    {[
                        { path: "/", label: "Home" },
                        { path: "/about", label: "About Us" },
                        { path: "/products", label: "Products" },
                        { path: "/allServices", label: "Services" },
                        { path: "/contact", label: "Contact" },
                    ].map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`flex items-center space-x-2 transition duration-300 
                    ${activeLink === link.path
                                    ? "text-[#CA9B6B] border-b-2 border-[#CA9B6B]"
                                    : "hover:text-[#CA9B6B]"
                                }`}
                        >
                            <span>{link.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 bg-white border border-gray-800 rounded-full w-10 h-10 flex justify-center items-center font-extrabold text-2xl"
                    >
                        <IoMenu />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4 space-y-2">
                    {[
                        { path: "/", label: "Home" },
                        { path: "/about", label: "About Us" },
                        { path: "/products", label: "Products" },
                        { path: "/allServices", label: "Services" },
                        { path: "/contact", label: "Contact" },
                    ].map((link) => (
                        <Link
                            key={link.path}
                            onClick={toggleMenu}
                            to={link.path}
                            className={`block px-4 py-2 text-sm transition duration-300 
                    ${activeLink === link.path
                                    ? "text-[#CA9B6B] border-b-2 border-[#CA9B6B]"
                                    : "hover:text-[#CA9B6B]"}`
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>

    );
};

export default Navbar;
