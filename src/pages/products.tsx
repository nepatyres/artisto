'use client';
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import '../app/globals.css'
import axios from "axios";

export default function Products() {
    const [products, setProducts] = useState<any>([]);
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products/get');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);
    return (
        <div className="flex h-auto bg-white">
            <Navbar />
            <div className="flex h-auto lg:w-[80%] md:w-[90%] mx-auto mt-20 flex-col">
                <span className="text-4xl px-3 py-10">Products</span>
                <div className="w-full grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 mx-auto gap-5">
                    {products.filter(product => product.display).map((product: any, i: number) => (
                        <div key={i} className="w-full flex space-between">
                            <div className="flex mx-auto flex-col cursor-pointer">
                                <div className="lg:w-[380px] lg:h-[400px] w-[280px] h-[300px] rounded-lg mx-auto">
                                    <img src={product.images[0]} className="h-full w-full object-cover object-center rounded-lg" alt="" />
                                </div>
                                <div className="flex flex-col text-center pt-2 pb-3">
                                    <span className="text-sm 2xl:text-md w-[70%] mx-auto">{product.name}</span>
                                    <span>€{product.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}