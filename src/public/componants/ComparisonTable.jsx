import React from 'react'

const ComparisonTable = () => {
    return <>
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-800">Product Comparison</h2>
                <p className="text-lg text-gray-600">Compare Plastic Pallet and Ekaa Warehouse Wood Pallet</p>
            </div>

            <div className="container mx-auto overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Table Header */}
                    <thead className="bg-gradient-to-r from-gray-800 to-gray-600 text-white">
                        <tr>
                            <th className="py-5 px-8 text-left text-sm uppercase tracking-wider font-semibold">Sr. No</th>
                            <th className="py-5 px-8 text-left text-sm uppercase tracking-wider font-semibold">Features</th>
                            <th className="py-5 px-8 text-left text-sm uppercase tracking-wider font-semibold">Plastic Pallet</th>
                            <th className="py-5 px-8 text-left text-sm uppercase tracking-wider font-semibold">Ekaa Warehouse Wood Pallet</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="text-gray-700 divide-y divide-gray-200">
                        <tr className="hover:bg-gray-100 transition-colors duration-300">
                            <td className="py-4 px-8 text-center">1</td>
                            <td className="py-4 px-8">Material</td>
                            <td className="py-4 px-8">Ldpe/Hdpe/Pp</td>
                            <td className="py-4 px-8">Imported German wood / SYP</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                            <td className="py-4 px-8 text-center">2</td>
                            <td className="py-4 px-8">Load Capacity</td>
                            <td className="py-4 px-8">1 to 2.5 metric ton</td>
                            <td className="py-4 px-8">1 to 2.5 metric ton</td>
                        </tr>
                        <tr className="hover:bg-gray-100 transition-colors duration-300">
                            <td className="py-4 px-8 text-center">3</td>
                            <td className="py-4 px-8">Price</td>
                            <td className="py-4 px-8">3000 to 4000 rupees</td>
                            <td className="py-4 px-8">1500 to 2500 rupees</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                            <td className="py-4 px-8 text-center">4</td>
                            <td className="py-4 px-8">Color</td>
                            <td className="py-4 px-8">Red/Blue</td>
                            <td className="py-4 px-8">Red/Blue</td>
                        </tr>
                        <tr className="hover:bg-gray-100 transition-colors duration-300">
                            <td className="py-4 px-8 text-center">5</td>
                            <td className="py-4 px-8">User Company Name on Pallets</td>
                            <td className="py-4 px-8">No</td>
                            <td className="py-4 px-8">Yes</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                            <td className="py-4 px-8 text-center">6</td>
                            <td className="py-4 px-8">Stock Wise Identification Slot on Pallet</td>
                            <td className="py-4 px-8">No</td>
                            <td className="py-4 px-8">Yes</td>
                        </tr>
                        <tr className="hover:bg-gray-100 transition-colors duration-300">
                            <td className="py-4 px-8 text-center">7</td>
                            <td className="py-4 px-8">Operation Life</td>
                            <td className="py-4 px-8">1 to 1.5 years</td>
                            <td className="py-4 px-8">2 to 3 years / Special Case 5 years</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                            <td className="py-4 px-8 text-center">8</td>
                            <td className="py-4 px-8">Operation Guarantee Card</td>
                            <td className="py-4 px-8">No</td>
                            <td className="py-4 px-8">Yes</td>
                        </tr>
                        <tr className="hover:bg-gray-100 transition-colors duration-300">
                            <td className="py-4 px-8 text-center">9</td>
                            <td className="py-4 px-8">In Case Broken During Operation</td>
                            <td className="py-4 px-8">Scrap</td>
                            <td className="py-4 px-8">Repair at 75 to 100 rupees</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                            <td className="py-4 px-8 text-center">10</td>
                            <td className="py-4 px-8">After Operation Value</td>
                            <td className="py-4 px-8">Scrap</td>
                            <td className="py-4 px-8">We will buy back at 15% to 30% of purchased value</td>
                        </tr>
                        <tr className="hover:bg-gray-100 transition-colors duration-300">
                            <td className="py-4 px-8 text-center">11</td>
                            <td className="py-4 px-8">Pallet on Rent Option</td>
                            <td className="py-4 px-8">No</td>
                            <td className="py-4 px-8">Yes, at 1.75/day</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                            <td className="py-4 px-8 text-center">12</td>
                            <td className="py-4 px-8">Successful Projects with Clients</td>
                            <td className="py-4 px-8">-</td>
                            <td className="py-4 px-8">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

    </>
}

export default ComparisonTable