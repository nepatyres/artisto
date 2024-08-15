import React, { useState, useEffect } from "react";
import Hero from "../components/homePage/hero";
import Bestseller from "../components/homePage/bestseller";
import MoreProducts from "@/components/homePage/moreProducts";

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [textSize, setTextSize] = useState(80);

    useEffect(() => {
        if (isLoading && textSize) {
            const timer = setTimeout(() => {
                setTextSize((prevSize) => prevSize + 7);
            }, 1);
            return () => clearTimeout(timer);
        }
    }, [isLoading, textSize]);

    return (
        <>
            {!isLoading && <Hero />}
            <Bestseller setIsLoading={setIsLoading} />
            <MoreProducts />
            {isLoading &&
                <div className="fixed w-screen h-screen flex top-0 left-0 z-[9999] bg-black justify-center items-center">
                    <span className="text-white" style={{ fontSize: `${textSize}px` }}>Artisto</span>
                </div>}
        </>
    );
}





