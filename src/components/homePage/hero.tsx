import React from "react";
import Navbar from "../navbar";

export default function Hero() {
    return (
        <div className="h-screen w-full">
            <img src="/images/bg.jpg" className="w-full h-screen object-cover bg-cover bg-center absolute bg-no-repeat bg-fixed flex flex-col brightness-50 transition" alt="" />
            <Navbar />
            <div className="flex w-[80%] mx-auto">
                <p className="z-50 text-white/80 text-6xl absolute top-[50%]">Discover the perfect fusion of automotive passion and art. </p>
            </div>
        </div>
    )
};