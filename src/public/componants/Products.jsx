import React from "react";
import { Link } from 'react-router-dom'

const Products = () => {
    const products = [
        { id: 1, name: "Euro Pallet", description: "Euro standard pallets", image: "/products/eurowooden-pallets.jpg" },
        { id: 4, name: "4 Way Pallet", description: "Custom Wooden Boxes", image: "/products/4wayPartial.png" },
        { id: 5, name: "Pinewood Box", description: "Custom Wooden Boxes", image: "/products/pinewood-boxes-500x500-1000x1000.webp" },
        { id: 7, name: "Heat Treated Wooden", description: "Heat treated wooden pallet", image: "/products/custom-pallerts-new-wooden-GFB-Pallets-1-1.png" },
        { id: 9, name: "Cable Drum For Cable", description: "High quality plastic packaging", image: "/products/Cable1.png" },
        { id: 10, name: "Wooden Pallet With Collar", description: "High quality plastic packaging", image: "/products/pallet-collar-hinge-500x500-1000x1000.jpg" },
        { id: 11, name: "Wooden Collar", description: "High quality plastic packaging", image: "/products/palop0001-houten-opzetranden-euro-formaat-biopack.jpg" },
        { id: 12, name: "Wooden Pallet Collar", description: "High quality plastic packaging", image: "/products/wooden-pallet-collars.jpg" },
        // Add other products here
    ];
    return <>
        <section className="py-10  ">
            <div className="text-center mb-10 ">
                <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
                <p className="text-lg text-gray-600">Compliant with I.S.P.M.-15 Standards</p>
            </div>

            <div className="container px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {products.map((product, index) => (
                    <div key={index} className="relative border border-black  group overflow-hidden bg-white shadow-lg  hover:shadow-2xl transform transition duration-500">

                        {/* Product Image */}
                        <img
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            src={product.image}
                            alt={product.name}
                        />

                        {/* Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white">
                            <h3 className="text-xl font-bold">{product.name}</h3>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Product Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white group-hover:translate-y-0 translate-y-full transition-transform duration-500">
                            <h3 className="text-xl font-bold">{product.name}</h3>
                            <p className="mt-2 text-sm">{product.description}</p>
                            <Link to={`/products`}>
                                <button className="mt-4 bg-[#CA9B6B] py-2 px-2 rounded  transition-colors duration-300">View More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    </>
};


export default Products;
