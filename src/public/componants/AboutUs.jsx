import React from "react";
import { FaLeaf, FaTruck, FaTools, FaRecycle } from "react-icons/fa"; // Example icons
import { Link } from "react-router-dom";

const AboutUs = () => {
    return <>
        <section className="bg-gray-100 py-16">
            <div className="container px-5 mx-auto flex flex-col md:flex-row justify-between gap-12">
                {/* Left Side: Image */}
                <div className="md:w-1/2 relative h-auto flex">
                    <img
                        src="https://lirp.cdn-website.com/522a2511/dms3rep/multi/opt/GettyImages-459334475-1920w.jpg"
                        alt="About Us"
                        className="w-full h-auto relative z-10 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 md:h-[400px]"
                    />
                </div>

                {/* Right Side: Information */}
                <div className="md:w-1/2 flex flex-col justify-center space-y-6">
                    <p className="text-lg text-gray-800 mb-2 leading-relaxed">
                        We are a leading Wooden Pallets Manufacturer, delivering top-quality, durable, and compliant products to industries across various sectors. Our mission is to ensure the highest standards of quality, service, and sustainability in every packaging material we provide.
                    </p>

                    {/* Additional Information */}
                    <ul className="text-lg text-gray-800 space-y-4">
                        <li className="flex items-center">
                            <FaLeaf className="text-[#CA9B6B] mr-3 text-3xl" />
                            <span>We offer solutions compliant with I.S.P.M.-15 Standards for international shipping.</span>
                        </li>
                        <li className="flex items-center">
                            <FaRecycle className="text-[#CA9B6B]  mr-3 text-3xl" />
                            <span>We use eco-friendly materials to promote sustainability in packaging.</span>
                        </li>
                        <li className="flex items-center">
                            <FaTools className="text-[#CA9B6B]  mr-3 text-3xl" />
                            <span>Our advanced technology ensures high precision and durability in all products.</span>
                        </li>
                        <li className="flex items-center">
                            <FaTruck className="text-[#CA9B6B]  mr-3 text-3xl" />
                            <span>Customized packaging solutions tailored to meet individual business needs.</span>
                        </li>
                    </ul>

                    {/* Call to Action */}
                    <Link to={"/about"}>
                        <button className="bg-black hover:bg-gray-800 text-white py-2 px-5 rounded-md transition-all">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </section>

    </>

};

export default AboutUs;


