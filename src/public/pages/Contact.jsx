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
        <div className="mt-16 bg-[url('https://www.highway-logistics.co.uk/wp-content/uploads/2021/04/how_are_wooden_pallets_made.jpg')] bg-cover bg-center h-[150px] sm:h-[200px] md:h-[220px]  flex justify-center">
            <div className="text-center flex justify-center items-center bg-black bg-opacity-50 p-6 rounded-lg h-full w-full">
                <h1 className="text-white text-2xl md:text-5xl font-bold mb-4">
                    Contact Us
                </h1>


            </div>
        </div>



        <div className=" p-6">
            <div className="max-w-7xl mx-auto bg-white  shadow-lg p-8 px-6">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Get In Touch</h2>
                <p className="text-gray-600 mb-8 text-center">
                    We would love to hear from you! Please fill out the form below or contact us using the information provided.
                </p>

                <div className="flex flex-col md:flex-row md:space-x-20">
                    {/* Form Section */}
                    <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Form</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

                            <div className="grid grid-cols-1 mb-6">
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
                                className="w-full bg-[#CA9B6B] text-white p-4 rounded-md hover:bg-[#C49C6E] transition duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information Section */}
                    <div className="flex-1 mt-8 md:mt-0">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                        <div className="flex items-center mb-4 text-gray-600">
                            <FaMapMarkerAlt className="text-[#CA9B6B] mr-4" />
                            <p>Office No.1, Ground floor, Golden City Centre, Besides Prozone mall, Chikhalthana</p>
                        </div>
                        <div className="flex items-center mb-4 text-gray-600">
                            <FaPhoneAlt className="text-[#CA9B6B] mr-4" />
                            <p className="">Phone:<a href="tel:+8767486600" >+918767486600</a></p>
                        </div>
                        <div className="flex items-center mb-4 text-gray-600">
                            <FaEnvelope className="text-[#CA9B6B] mr-4" />
                            <p><a href="mailto:ekkagroup.aurangabad@gmail.com">ekkagroup.aurangabad@gmail.com</a></p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Find Us Here</h3>
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
            </div>
        </div>

    </>
}

export default Contact