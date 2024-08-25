'use client';
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import '../app/globals.css'
import axios from "axios";
import Router from "next/router";
import { AnimatePresence } from "framer-motion";
import PreloaderLeft from "@/components/preloader/preloaderLeft";
import Footer from "@/components/footer";

export default function Products() {
    const [products, setProducts] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState(false);
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.cursor = 'default'
                    window.scrollTo(0, 0);
                }, 2000)
            }
        )()
    }, [])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products/get');
            setProducts(response.data);
        };
        fetchProducts();
        setIsLoading(false);
    }, []);

    const redirectBtn = (id) => {
        Router.push(`/products/${id}`);
    }

    const cartBtn = () => {
        setCart(!cart);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };
    return (
        <div className="flex h-auto bg-white flex-col">
            <AnimatePresence mode='wait'>
                {isLoading && <PreloaderLeft />}
            </AnimatePresence>
            <Navbar cartBtn={cartBtn} cart={cart}/>
            <div className="flex h-auto lg:w-[80%] md:w-[90%] mx-auto mt-20 flex-col mb-20">
                <span className="text-4xl px-3 py-10">Products</span>
                <div className="w-full grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 mx-auto gap-5">
                    {products.filter(product => product.display).map((product: any, i: number) => (
                        <div key={i} className="w-full flex space-between">
                            <div className="flex mx-auto flex-col cursor-pointer" onClick={(e) => redirectBtn(product.id)}>
                                <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] rounded-lg mx-auto">
                                    <img src={product.images[0]} className="h-full w-full object-cover object-center rounded-md" alt="" />
                                </div>
                                <div className="flex flex-col text-center pt-2 pb-3">
                                    <span className="text-sm 2xl:text-md w-[70%] mx-auto">{product.name}</span>
                                    <span>€{formatPrice(product.price)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}