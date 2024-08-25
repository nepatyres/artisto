import React, { useState, useEffect } from "react";
import Hero from "../components/homePage/hero";
import Bestseller from "../components/homePage/bestseller";
import MoreProducts from "@/components/homePage/moreProducts";
import Preloader from "@/components/preloader/preloader";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/footer";

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            document.body.style.cursor = 'default';
        }, 2000);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Hero />
            <Bestseller setIsLoading={setIsLoading} />
            <MoreProducts />
            <Footer />
        </>
    );
}






