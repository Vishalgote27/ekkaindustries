import React from 'react';
import ComparisonTable from '../componants/ComparisonTable';
import { FaCheck } from 'react-icons/fa';


const About = () => {
    return (
        <>
            <div className="mt-16 bg-[url('https://www.highway-logistics.co.uk/wp-content/uploads/2021/04/how_are_wooden_pallets_made.jpg')] bg-cover bg-center h-[250px] flex  justify-center">
                <div className="text-center flex justify-center items-center bg-black bg-opacity-50 p-6 rounded-lg h-full w-full">
                    <h1 className="text-white text-2xl md:text-5xl font-bold mb-4">
                        About Ekka Industries
                    </h1>


                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Main About Section */}
                <div className="flex flex-col md:flex-row items-center mb-8">
                    {/* Left Image Section */}
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <img
                            src="https://bmr-pallets.com/wp-content/uploads/Pallet-Kayu-Ekspor-1024x683.jpg" // Replace with actual image URL
                            alt="Wooden Pallet Manufacturing"
                            className="w-full h-96 object-cover rounded-lg shadow-md" // Fixed height
                        />
                    </div>

                    {/* Right Text Section */}
                    <div className="md:w-1/2 md:ml-6">
                        <h1 className="text-3xl font-bold mb-6">About Us</h1>
                        <p className="mt-4 text-gray-700">
                            We are a private limited company based in Chh. Sambhajinagar, specializing in the manufacture of high-quality packaging materials.
                        </p>
                        <p className="mt-4 text-gray-700">
                            We are a private limited company based in Chh. Sambhajinagar, specializing in the manufacture of high-quality packaging materials.
                        </p>

                        <p className="mt-4 text-gray-700">
                            As an ISO 9001:2015 certified organization, we adhere to the highest standards of quality and service.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Certifications & Approvals</h3>
                        <ul className="mt-4 list-disc list-inside text-gray-700">
                            <li>Approved by the Ministry of Agriculture</li>
                            <li>Approved by Plant Protection Quarantine & Storage</li>
                            <li>Home to the largest heat treatment plant in Maharashtra</li>
                        </ul>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="bg-gray-50 py-8 px-4 rounded-lg shadow-md">
                    <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex  items-center space-x-4">
                            <div className="text-green-500">
                                {/* Icon (optional) */}
                                <FaCheck className=" text-5xl " />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Quality Assurance</h4>
                                <p className="text-gray-600">We ensure every product meets industry standards for quality and durability.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="text-green-500">
                                {/* Icon */}
                                <FaCheck className=" text-5xl " />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Custom Solutions</h4>
                                <p className="text-gray-600">We tailor our packaging to suit the unique needs of your business.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="text-green-500">
                                {/* Icon */}
                                <FaCheck className=" text-5xl " />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Sustainability</h4>
                                <p className="text-gray-600">Our eco-friendly materials help reduce the environmental impact of packaging.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="py-8">
                    <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Our Mission & Vision</h2>
                    <p className="text-center text-gray-700 max-w-3xl mx-auto">
                        Our mission is to provide high-quality, sustainable packaging solutions that meet the diverse needs of our clients while promoting environmental responsibility. We envision becoming a global leader in the packaging industry, known for our innovative solutions and commitment to sustainability.
                    </p>
                </div>


            </div>

            {/* Comparison Table */}
            <ComparisonTable />
        </>
    );
}

export default About;
