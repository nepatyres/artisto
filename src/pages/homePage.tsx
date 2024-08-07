import React, { useState, useEffect } from "react";
import Hero from "../components/homePage/hero";
import Bestseller from "../components/homePage/bestseller";
import MoreProducts from "@/components/homePage/moreProducts";
import Spinner from "@/components/spinner/spinner";

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return <div className="w-full h-screen bg-black justify-center items-center flex flex-col">
            <a className=" text-white text-7xl uppercase">ARTISTO</a>
            <Spinner />
        </div>;
    }
    return (
        <>
                <Hero />
                <Bestseller setIsLoading={setIsLoading} />
                <MoreProducts />
        </>
    );
}