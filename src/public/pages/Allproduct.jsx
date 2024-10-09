import React from 'react'
import { Link } from 'react-router-dom';

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
const Allproduct = () => {
    return <>
        <div className="mt-16 bg-[url('https://www.highway-logistics.co.uk/wp-content/uploads/2021/04/how_are_wooden_pallets_made.jpg')] bg-cover bg-center h-[250px] flex  justify-center">
            <div className="text-center flex justify-center items-center bg-black bg-opacity-50 p-6 rounded-lg h-full w-full">
                <h1 className="text-white text-2xl md:text-5xl font-bold mb-4">
                    Our Products
                </h1>


            </div>
        </div>
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
                            <Link to={`/ProductDetails/${product.id}`}>
                                <button className="mt-4 bg-[#CA9B6B] py-2 px-4 rounded  transition-colors duration-300">Learn More</button>
                            </Link>
                        </div>
                    </div>
                ))}
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

export default Allproduct