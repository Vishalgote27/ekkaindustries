import React from 'react';
import ComparisonTable from '../componants/ComparisonTable';
import { FaCogs, FaLeaf, FaShieldAlt, FaGlobeAmericas, FaStar, FaRecycle, FaIndustry, FaCheckCircle, FaCertificate } from 'react-icons/fa';


const About = () => {
    return (
        <>
            <div className="mt-16 bg-[url('https://www.highway-logistics.co.uk/wp-content/uploads/2021/04/how_are_wooden_pallets_made.jpg')] bg-cover bg-center h-[150px] sm:h-[200px] md:h-[220px]  flex justify-center">
                <div className="text-center flex justify-center items-center bg-black bg-opacity-50 p-6 rounded-lg h-full w-full">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                        About Ekaa Industries
                    </h1>
                </div>
            </div>


            <div className="container mx-auto px-4 py-12">
                {/* Main About Section */}
                <div className="flex flex-col md:flex-row items-center mb-12">
                    {/* Left Image Section */}
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <img
                            src="/WhatsApp Image 2024-12-11 at 16.06.04_d0ab96f9.jpg"
                            // src="/products/aboutus.jpg"
                            alt="Wooden Pallet Manufacturing"
                            className="w-full h-auto object-cover rounded-md shadow-lg"
                        />
                    </div>

                    {/* Right Text Section */}
                    <div className="md:w-1/2 md:ml-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            We are a private limited company based in Chh. Sambhajinagar, specializing in the manufacture of high-quality packaging materials.
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            As an ISO 9001:2015 certified organization, we adhere to the highest standards of quality and service.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 flex items-center">
                            <FaCertificate className="text-blue-600 mr-2" /> Certifications & Approvals
                        </h3>
                        <ul className="mt-4 list-disc list-inside text-gray-700">
                            <li className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" /> Approved by the Ministry of Agriculture
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" /> Approved by Plant Protection Quarantine & Storage
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" /> Home to the largest heat treatment plant in Maharashtra
                            </li>
                        </ul>
                    </div>
                </div>


                {/* Why Choose Us Section */}
                <div className="bg-gray-50 py-12 px-8 ">
                    <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Card 1: Quality Assurance */}
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                            <div className="w-16 h-16 flex items-center justify-center bg-[#CA9B6B] rounded-full mb-4">
                                <FaShieldAlt className="text-white text-3xl" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h4>
                            <p className="text-gray-600  sm:text-center leading-relaxed text-start">
                                We ensure every product meets industry standards for quality and durability.
                            </p>
                        </div>
                        {/* Card 2: Custom Solutions */}
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                            <div className="w-16 h-16 flex items-center justify-center bg-[#CA9B6B] rounded-full mb-4">
                                <FaCogs className="text-white text-3xl" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Custom Solutions</h4>
                            <p className="text-gray-600 text-start sm:text-center leading-relaxed">
                                We tailor our packaging to suit the unique needs of your business.
                            </p>
                        </div>
                        {/* Card 3: Sustainability */}
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                            <div className="w-16 h-16 flex items-center justify-center bg-[#CA9B6B] rounded-full mb-4">
                                <FaLeaf className="text-white text-3xl" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h4>
                            <p className="text-gray-600 text-start sm:text-center leading-relaxed">
                                Our eco-friendly materials help reduce the environmental impact of packaging.
                            </p>
                        </div>
                    </div>
                </div>


                <div className=" py-12">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide ">
                            Our Mission & Vision
                        </h2>
                        <div className="bg-white p-10 rounded-lg shadow-xl max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-center justify-center mb-8 space-x-6">
                                <div className="text-blue-600">
                                    <FaRecycle className="text-4xl" />
                                </div>
                                <div className="text-green-600">
                                    <FaGlobeAmericas className="text-4xl" />
                                </div>
                                <div className="text-yellow-500">
                                    <FaStar className="text-4xl" />
                                </div>
                            </div>
                            <p className="text-gray-800 text-lg leading-relaxed text-start sm:text-center">
                                Our mission is to provide high-quality, sustainable packaging solutions that meet the diverse needs of our clients while promoting environmental responsibility. We envision becoming a global leader in the packaging industry, known for our innovative solutions and commitment to sustainability.
                            </p>
                        </div>
                    </div>
                </div>


            </div>


            {/* Comparison Table */}
            <ComparisonTable />
        </>
    );
}

export default About;
