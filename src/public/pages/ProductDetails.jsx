import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const products = [
        { id: 1, name: "Euro Pallet", description: "Euro standard pallets", image: "http://woodenboxmanufacturerpune.com/images/products/wooden-pallets.jpg" },
        { id: 2, name: "CP Pallet", description: "Manufacturer of Wooden Pallet", image: "https://www.woodpallets.co.in/web/images/portfolio/cp2pallet.jpg" },
        { id: 3, name: "2 Way Pallet", description: "Custom Wooden Boxes", image: "https://5.imimg.com/data5/SELLER/Default/2021/6/JU/LQ/MM/112153184/two-way-wooden-pallet.jpg" },
        { id: 4, name: "4 Way Pallet", description: "Custom Wooden Boxes", image: "https://timpack.co.nz/wp-content/uploads/2019/03/Partial1.png" },
        { id: 5, name: "Pinewood Box", description: "Custom Wooden Boxes", image: "https://5.imimg.com/data5/SELLER/Default/2022/6/MS/PE/SH/25902065/pinewood-boxes-500x500-1000x1000.jpg" },
        { id: 6, name: "Pine Wood Crate", description: "Supplier of Pine Wood Pallet", image: "https://www.woodpallets.co.in/web/images/PineWood%20Creat.gif" },
        { id: 7, name: "Heat Treated Wooden", description: "Heat treated wooden pallet", image: "https://sawmillusa1.com/wp-content/uploads/2023/05/custom-pallerts-new-wooden-GFB-Pallets-1-1.png" },
        { id: 8, name: "Heat Treated Pine Wood", description: "Heat treated wooden pallet", image: "https://5.imimg.com/data5/BF/GP/MY-13347636/pine-wood-500x500.jpg" },
        { id: 9, name: "Cable Drum For Cable", description: "High quality plastic packaging", image: "https://timpack.co.nz/wp-content/uploads/2019/03/Cable1.png" },
        { id: 10, name: "Wooden Pallet With Collar", description: "High quality plastic packaging", image: "https://5.imimg.com/data5/DL/LU/XQ/SELLER-96762746/pallet-collar-hinge-500x500-1000x1000.jpg" },
        { id: 11, name: "Wooden Collar", description: "High quality plastic packaging", image: "https://www.biopack.be/media/catalog/product/cache/41b5db458861dd093d01d7dcd8f2756b/p/a/palop0001-houten-opzetranden-euro-formaat-biopack.jpg" },
        { id: 12, name: "Wooden Pallet Collar", description: "High quality plastic packaging", image: "https://5.imimg.com/data5/JA/NH/WH/SELLER-135030/wooden-pallet-collars.jpg" },
        { id: 13, name: "Red Pallet ", description: "High quality plastic packaging", image: "https://www.lpr.eu/app/uploads/sites/3/2023/12/100x120_00071-1024x683.jpg" },
        { id: 14, name: "Blue Pallet ", description: "High quality plastic packaging", image: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/blue-mild-steel-pallet-for-construction-capacity-2-ton20230914110756.png" },
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
            <div className="bg-[url('https://www.highway-logistics.co.uk/wp-content/uploads/2021/04/how_are_wooden_pallets_made.jpg')] bg-cover bg-center h-[250px] flex  justify-center">
                <div className="text-center flex justify-center items-center bg-black bg-opacity-50 p-6 rounded-lg h-full w-full">
                    <h1 className="text-white text-2xl md:text-5xl font-bold mb-4">
                        Premium Wooden Pallets for Every Need
                    </h1>


                </div>
            </div>

            {/* Product Details Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center px-5 max-w-6xl mx-auto gap-8 py-10">
                {/* Product Image */}
                <div className="w-full md:w-1/2 h-[400px] flex items-center justify-center rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Product Info */}
                <div className="w-full md:w-1/2 h-auto flex flex-col justify-center p-8 rounded-lg shadow-lg ">
                    <h1 className="text-4xl font-semibold mb-4 text-gray-800">{product.name}</h1>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Specifications: </h3>
                    <ul className="list-disc list-inside mb-4 text-gray-600">
                        <li>Standard Size: 1200mm x 800mm</li>
                        <li>Weight Capacity: 1500 kg</li>
                        <li>Material: High-quality wood</li>
                        <li>Used in shipping and warehousing</li>
                    </ul>
                    <button className="bg-black w-52 text-white py-2 px-4 rounded hover:bg-[#B59454] transition-all">
                        Request a Quote
                    </button>

                </div>
            </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-[#CA9B6B] py-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Elevate Your Shipping?</h2>
                <p className="text-lg text-gray-100 mb-8">Get in touch with us today to learn more about how our wooden pallets can help streamline your operations.</p>
                <button className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-500 transition-all">
                    Contact Us Today
                </button>
            </div>
        </div>


    </>
}

export default ProductDetails