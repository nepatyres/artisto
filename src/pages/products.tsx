'use client';
import React, { useEffect } from "react";
import Navbar from "@/components/navbar";
import '../app/globals.css'
import { products } from "@/constants/products";

export default function Products() {
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])
    return (
        <div className="flex h-auto bg-white">
            <Navbar />
            <div className="flex h-auto w-[80%] mx-auto mt-20 flex-col">
                <span className="text-4xl px-3 py-10">Products</span>
                <div className="w-full grid xl:grid-cols-2 2xl:grid-cols-3 mx-auto">
                    {products.map((product, i) => (
                        <div key={i} className="w-full flex space-between">
                            <div className="flex mx-auto flex-col">
                                <div className="w-[400px] h-[400px] rounded-lg">
                                    <img src={product.bg} className="h-full w-full object-cover object-center rounded-lg" alt="" />
                                </div>
                                <div className="flex flex-col text-center pt-1.5 pb-3">
                                    <span>{product.name}</span>
                                    <span>{product.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}