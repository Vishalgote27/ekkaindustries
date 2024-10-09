import React from 'react';
import AboutUs from './AboutUs';
import Services from './Services';
import Products from './Products';

const Hero = () => {
    return <>
        <div className="w-full mt-16">
            <img
                src="/ekkaindustries.png"
                alt="Furniture Banner"
                className="
            w-full 
            h-52      /* Mobile height */
            sm:h-80   /* Small screens */
            md:h-96   /* Medium screens */
            lg:h-[30rem]  /* Large screens */
            xl:h-[34rem]  /* Extra-large screens */
            object-cover"
            />
        </div>

        <AboutUs />
        <Products />
        <Services />

    </>

}

export default Hero;
