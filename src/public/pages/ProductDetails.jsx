import React from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const products = [
        { id: 1, name: "Euro Pallet", description: "Euro standard pallets", image: "/products/eurowooden-pallets.jpg" },
        { id: 2, name: "CP Pallet", description: "Manufacturer of Wooden Pallet", image: "/products/4wayPartial.png" },
        { id: 3, name: "2 Way Pallet", description: "Custom Wooden Boxes", image: "/products/eurowooden-pallets.jpg" },
        { id: 4, name: "4 Way Pallet", description: "Custom Wooden Boxes", image: "/products/4wayPartial.png" },
        { id: 5, name: "Pinewood Box", description: "Custom Wooden Boxes", image: "/products/pinewood-boxes-500x500-1000x1000.webp" },
        { id: 6, name: "Pine Wood Crate", description: "Supplier of Pine Wood Pallet", image: "/products/PineWood Creat.gif" },
        { id: 7, name: "Heat Treated Wooden", description: "Heat treated wooden pallet", image: "/products/custom-pallerts-new-wooden-GFB-Pallets-1-1.png" },
        { id: 8, name: "Heat Treated Pine Wood", description: "Heat treated wooden pallet", image: "/products/pine-wood-500x500.webp" },
        { id: 9, name: "Cable Drum For Cable", description: "High quality plastic packaging", image: "/products/Cable1.png" },
        { id: 10, name: "Wooden Pallet With Collar", description: "High quality plastic packaging", image: "/products/pallet-collar-hinge-500x500-1000x1000.jpg" },
        { id: 11, name: "Wooden Collar", description: "High quality plastic packaging", image: "/products/palop0001-houten-opzetranden-euro-formaat-biopack.jpg" },
        { id: 12, name: "Wooden Pallet Collar", description: "High quality plastic packaging", image: "/products/wooden-pallet-collars.jpg" },
        { id: 13, name: "Red Pallet ", description: "High quality plastic packaging", image: "/products/redpallet.webp" },
        { id: 14, name: "Blue Pallet ", description: "High quality plastic packaging", image: "/products/blue-mild-pallet.png" },
        { id: 15, name: "Red Plastic Pallet ", description: "High quality plastic packaging", image: "/products/redplasticpallet.webp" },
        { id: 16, name: "Blue Plastic Pallet ", description: "High quality plastic packaging", image: "/products/plasticbluepallet.webp" },
        // Add other products here
    ];
    const { id } = useParams(); // Get product ID from URL
    const product = products.find(p => p.id === parseInt(id)); // Find product by ID

    if (!product) {
        return <h2>Product not found!</h2>;
    }

    return <>
        <div className="bg-gray-100 mt-16">
            {/* Hero Section */}
            <div className="bg-[url('https://www.highway-logistics.co.uk/wp-content/uploads/2021/04/how_are_wooden_pallets_made.jpg')] bg-cover bg-center h-[150px] sm:h-[200px] md:h-[220px]  flex justify-center">
                <div className="text-center flex justify-center items-center bg-black bg-opacity-50 p-6 rounded-lg h-full w-full">
                    <h1 className="text-white text-2xl md:text-5xl font-bold mb-4">
                        Product Details
                    </h1>


                </div>
            </div>

            {/* Product Details Section */}
            {/* Product Details Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center px-5 max-w-6xl mx-auto gap-12 py-14">
                {/* Product Image */}
                <div className="w-full md:w-1/2 h-[400px] flex items-center justify-center rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Product Info */}
                <div className="w-full md:w-1/2 h-auto flex flex-col justify-center p-8 rounded-xl ">
                    <h1 className="text-4xl font-semibold text-gray-900 mb-4">{product.name}</h1>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{product.description}</p>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Specifications:</h3>
                        <ul className="list-disc list-inside mb-6 text-gray-600">
                            <li>Standard Size: 1200mm x 800mm</li>
                            <li>Weight Capacity: 1500 kg</li>
                            <li>Material: High-quality wood</li>
                            <li>Used in shipping and warehousing</li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/contact" className="bg-black text-white w-52 py-3 px-6 rounded-lg hover:bg-[#B59454] transition-all duration-300 ease-in-out">
                            Request a Quote
                        </Link>

                    </div>
                </div>
            </div>

        </div>

        {/* Call-to-Action Section */}
        <div className=" py-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-black mb-6">Ready to Elevate Your Shipping?</h2>
                <p className="text-lg text-black mb-8">Get in touch with us today to learn more about how our wooden pallets can help streamline your operations.</p>
                <button className="bg-black text-white font-semibold py-3 px-6 rounded-lg">
                    Contact Us Today
                </button>
            </div>
        </div>



    </>
}

export default ProductDetails