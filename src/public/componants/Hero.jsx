import React from 'react';
import AboutUs from './AboutUs';
import Services from './Services';
import Products from './Products';

const Hero = () => {
    return <>
        {/* <div className="w-full mt-16">
            <img
                src="/heroekka.png"
                alt="Furniture Banner"
                className="
            w-full 
            h-52     
            sm:h-80   
            md:h-96 
            lg:h-[30rem]    
            xl:h-[34rem]
            object-cover"
            />
        </div> */}




        <div className="w-full mt-16">
            {/* Image for mobile view */}
            <img
                src="/mobileview.jpg"  // Image for mobile screens
                alt="Furniture Banner"
                className="w-full h-auto sm:hidden object-cover"  // Visible on mobile only (hidden on sm and up)
            />

            {/* Image for larger screens (sm, md, lg, xl) */}
            <img
                src="/heroekka.png"
                alt="Furniture Banner"
                className="hidden sm:block w-full h-52 sm:h-80 md:h-[27rem] lg:h-[34rem] xl:h-[89vh] aspect-video object-cover"  // Visible on larger screens (sm and up)
            />


        </div>







        <AboutUs />
        <Products />
        <Services />

    </>

}

export default Hero;
