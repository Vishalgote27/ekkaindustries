import React from 'react'
import { FaBalanceScale, FaBox, FaCogs, FaLightbulb, FaRecycle, FaShieldAlt, FaShippingFast } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            title: "Total Packaging Solution Provider",
            description: "Offering end-to-end packaging solutions for businesses of all sizes.",
            icon: FaBox
        },
        {
            title: "Recycling of Plastic & Metal Scrap",
            description: "Sustainable recycling of plastic and metal materials.",
            icon: FaRecycle
        },
        {
            title: "Fumigation Services",
            description: "Ensuring your goods are safely protected during transportation.",
            icon: FaShieldAlt
        },
        {
            title: "Consultancy for Export & Warehouse Packaging",
            description: "Expert advice on packaging for export and warehouse storage.",
            icon: FaShippingFast
        },
        {
            title: "New Packaging Design",
            description: "Custom packaging designs tailored to your product and supply chain.",
            icon: FaCogs
        },
        {
            title: "Value-Added Packaging & Recycling",
            description: "Innovative solutions to enhance value in packaging and recycling.",
            icon: FaLightbulb
        },
        {
            title: "Innovative Packing Concepts",
            description: "Cutting-edge solutions to reduce warehouse pallet costs by up to 50%.",
            icon: FaBalanceScale
        },
        {
            title: "Innovative Packing Concepts",
            description: "Cutting-edge solutions to reduce warehouse pallet costs by up to 50%.",
            icon: FaBalanceScale
        }
    ];

    return <>
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                    Our Products & Services
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                        >
                            {/* Icon */}
                            <div className="text-[#CA9B6B] mb-6 flex justify-center">
                                <service.icon className="w-14 h-14" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-center leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>


        <section className="py-16 bg-white">
            <div className="container mx-auto text-center">
                {/* Heading */}
                <h3 className="text-4xl font-extrabold mb-6 text-gray-800">
                    Ready to Get Started?
                </h3>

                {/* Subtext */}
                <p className="mb-8 text-lg text-gray-600">
                    Contact us today for the best packaging solutions tailored to your needs.
                </p>

                {/* Button */}
                <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition-all duration-300">
                    Contact Us
                </button>
            </div>
        </section>







    </>
}

export default Services