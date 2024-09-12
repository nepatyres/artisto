'use client';
import Head from 'next/head';
import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import '../app/globals.css';
import Footer from "@/components/footer";

export default function About() {
    const [cart, setCart] = useState(false);
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
                setTimeout(() => {
                    document.body.style.cursor = 'default'
                    window.scrollTo(0, 0);
                }, 2000)
            }
        )()
    }, [])

    const cartBtn = () => setCart(!cart);
    return (
        <>
            <Head>
                <title>About us</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar cartBtn={cartBtn} cart={cart} />
            <div className="flex flex-col mx-auto w-[80%] lg:w-[60%] xl:w-[50%] font-roboto h-screen justify-center">
                <span className="text-4xl px-2 py-10 font-lato leading-4">About us</span>
                <p className="text-2xl">At Artisto, we believe in the art of craftsmanship and the joy of creation. Founded on a passion for detail, we set out to offer products that inspire imagination, ignite creativity, and bring out the maker in everyone. Whether you’re an enthusiast, a hobbyist, or someone discovering the world of cars, we’re here to offer a range of meticulously designed products that blend quality with innovation.</p>
            </div>
            <div className='flex w-full h-auto items-end'>
                <Footer  />
            </div>
        </>
    )
}