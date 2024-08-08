import React, { useState, useEffect } from "react";
import Hero from "../components/homePage/hero";
import Bestseller from "../components/homePage/bestseller";
import MoreProducts from "@/components/homePage/moreProducts";

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* <div className={`absolute top-0 left-0 w-full transition-transform duration-1500 ease-in-out ${isLoading ? 'translate-y-full' : 'translate-y-0'}`}> */}
                <Hero />
                <Bestseller setIsLoading={setIsLoading} />
                <MoreProducts />
            {/* </div> */}
        </>
    );
}





