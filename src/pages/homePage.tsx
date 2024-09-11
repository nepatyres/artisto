import React, { useState, useEffect } from "react";
import Hero from "../components/homePage/hero";
import Bestseller from "../components/homePage/bestseller";
import MoreProducts from "@/components/homePage/moreProducts";
import Preloader from "@/components/preloader/preloader";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/footer";

export default function HomePage() {
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loadScrollTrigger = async () => {
                const gsap = (await import("gsap")).default;
                const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
                gsap.registerPlugin(ScrollTrigger);
            };

            loadScrollTrigger();

            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = 'default';
            }, 2000);
        }
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Hero />
            <Bestseller setIsLoading={setIsLoading} />
            <MoreProducts />
            <div className="flex flex-col mx-auto w-[80%] lg:w-[60%] xl:w-[50%] mb-32 font-roboto min-h-[50vh] justify-center">
                <span className="text-4xl px-2 pb-10 font-lato leading-4">About us</span>
                <p className="text-2xl">At Artisto, we believe in the art of craftsmanship and the joy of creation. Founded on a passion for detail, we set out to offer products that inspire imagination, ignite creativity, and bring out the maker in everyone. Whether you’re an enthusiast, a hobbyist, or someone discovering the world of cars, we’re here to offer a range of meticulously designed products that blend quality with innovation.</p>
            </div>
            <Footer />
        </>
    );
}







