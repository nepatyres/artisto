import React from "react";
import Hero from "../components/hero";
import Collections from "../components/collection";
import MoreProducts from "@/components/moreProducts";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Collections />
            <MoreProducts />
        </>
    )
}