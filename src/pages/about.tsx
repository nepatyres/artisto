'use client';
import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import '../app/globals.css'
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
            <Navbar cartBtn={cartBtn} cart={cart} />
            <div className="w-full h-[80vh]"></div>
            <Footer />
        </>
    )
}