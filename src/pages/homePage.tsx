import React from "react";
import Hero from "../components/homePage/hero";
import Bestseller from "../components/homePage/bestseller";
import MoreProducts from "@/components/homePage/moreProducts";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Bestseller />
            <MoreProducts />
        </>
    )
}