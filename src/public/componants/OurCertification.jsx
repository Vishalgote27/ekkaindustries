import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
    "/products/Ekaa HT Certificate 02.jpeg",
    "/products/ekaa iso  copy latest.jpg",
    "/products/ekaa iso  copy.jpeg",
    "/products/ekaa PPQS certificate 1 (1).jpeg",
    "/products/EKAA SSI PART 2.jpeg",
    "/products/ekaa -certificate of  incorporation (3).jpg",
    "/products/GST CERTIFICATE EKAA_page-0001.jpg",
    "/products/ekaa udyog adhar_page-0001.jpg",
    "/products/Ekaa import export copy_page-0001.jpg",
];

const OurCertification = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of visible slides
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return <>
        <div className="bg-gray-50 py-10 px-5 overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8">Our Certifications</h2>
            <Slider {...settings}>
                {certifications.map((cert, index) => (
                    <div key={index} className="px-4">
                        <img
                            src={cert}
                            alt={`Certification ${index + 1}`}
                            className="w-full h-96 object-contain rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </Slider>
        </div>

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
};

export default OurCertification;
