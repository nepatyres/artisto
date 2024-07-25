'use client';
import React, { useEffect } from "react";
import Navbar from "@/components/navbar";
import '../app/globals.css'

export default function About() {
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])
    return (
        <div>
            <Navbar />
        </div>
    )
}