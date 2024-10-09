import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send to an API or log to console)
        console.log(formData);

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            mobile: '',
            message: '',
        });
    };
    return <>
        <div className="bg-[url('https://www.highway-logistics.co.uk/wp-content/uploads/2021/04/how_are_wooden_pallets_made.jpg')] bg-cover bg-center h-[250px] flex  justify-center">
            <div className="text-center flex justify-center items-center bg-black bg-opacity-50 p-6 rounded-lg h-full w-full">
                <h1 className="text-white text-2xl md:text-5xl font-bold mb-4">
                    Contact Us
                </h1>


            </div>
        </div>
        <div className="bg-gray-200 p-6">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8 px-5">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Get In Touch </h2>
                <p className="text-gray-600 mb-8 text-center">
                    We would love to hear from you! Please fill out the form below.
                </p>

                <div className="flex flex-col md:flex-row md:space-x-20 ">
                    <div className="flex-1 ">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CA9B6B]"
                                />

                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="Your Mobile"
                                    required
                                    className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CA9B6B]"
                                />
                            </div>

                            <div className="grid grid-cols-1 ">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CA9B6B]"
                                />
                            </div>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                className="p-4 mt-5 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CA9B6B] mb-4"
                                rows="4"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-black text-white p-4 rounded-md hover:bg-gray-800 transition duration-200"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                    {/* Contact Information Section */}
                    <div className="flex-1 mt-8 md:mt-0 ">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-[#CA9B6B] mr-2" />
                            <p className="text-gray-600">Office No.1, Ground floor, Golden City Centre, Besides Prozone mall, Chikhalthana</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-[#CA9B6B] mr-2" />
                            <p className="text-gray-600">+91 8767486600</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-[#CA9B6B] mr-2" />
                            <p className="text-gray-600">ekkagroup.aurangabad@gmail.com</p>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Find Us Here</h3>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469.0207000885313!2d75.37259167004346!3d19.875228094227555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9a2ecb89e829%3A0x9b5f417bc5f4fdb1!2sGolden%20city%20centre!5e0!3m2!1sen!2sin!4v1728467550015!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Google Maps Embed */}

            </div>
        </div>
    </>
}

export default Contact