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
        <section className="py-12 bg-gray-100">

            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Products & Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="text-[#CA9B6B] mb-4">
                                <service.icon className="w-12 h-12 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-12">
            <div className="container mx-auto text-center text-white">
                <h3 className="text-4xl font-bold mb-4 text-black">Ready to Get Started?</h3>
                <p className="mb-8 text-black">Contact us today for the best packaging solutions tailored to your needs.</p>
                <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-[#CA9B6B] transition duration-300">Contact Us</button>
            </div>
        </section>


    </>
}

export default Services