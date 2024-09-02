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
    const [sort, setSort] = useState(false);
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

    const sortBtn = () => {
        setSort(!sort);
    }

    const sortClose = () => {
        setSort(false);
    }

    const sortLowBtn = () => {
        setProducts([...products].sort((a,b) => a.price - b.price));
        setSort(false);
    }

    const sortHighBtn = () => {
        setProducts([...products].sort((a,b) => b.price - a.price));
        setSort(false);
    }

    const sortNewestBtn = () => {
        setProducts([...products].sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt)));
        setSort(false);
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
            <Navbar cartBtn={cartBtn} cart={cart} />
            <div className="flex min-h-[80vh] w-[90%] lg:w-[85%] mx-auto mt-20 flex-col mb-20">
                <div className="flex flex-row w-full justify-between items-center">
                    <span className="text-4xl px-3 py-10">Products</span>
                    <div className="flex flex-row lg:pt-8 self-center">
                        <span className="text-black/60 pr-3 lg:pr-6">{products.filter(products => products.display).length} Items</span>
                        <div>
                            <button onClick={sortBtn} className="cursor-pointer">Sort by</button>
                            {sort && 
                            <ul className="shadow-xl mt-1 px-3 py-1.5 absolute z-[100] bg-white text-nowrap right-0 xl:right-auto rounded-md">
                                <li className="cursor-pointer" onClick={sortLowBtn}>Price, low to high</li>
                                <li className="cursor-pointer" onClick={sortHighBtn}>Price, high to low</li>
                                <li className="cursor-pointer" onClick={sortNewestBtn}>Newest</li>
                            </ul>}
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 lg:grid-cols-3 mx-auto gap-5 2xl:mt-10">
                    {products.filter(product => product.display).map((product: any, i: number) => (
                        <div key={i} className="w-full flex space-between">
                            <div className="flex mx-auto flex-col cursor-pointer" onClick={(e) => redirectBtn(product.id)}>
                                <div className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] 2xl:w-[400px] 2xl:h-[400px] rounded-lg mx-auto">
                                    <img src={product.images[0]} className="h-full w-full object-cover object-center rounded-md" alt="" />
                                </div>
                                <div className="flex flex-col w-auto pt-2 pb-3">
                                    <span className="text-md 2xl:text-md mx-auto">{product.name}</span>
                                    <span className="mx-auto">€{formatPrice(product.price)}</span>
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