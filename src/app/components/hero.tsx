import React from "react";
import Navbar from "./navbar";

export default function Hero() {
    return (
        <div className="h-screen">
            <img src="bg.jpg" className="w-full h-screen object-cover bg-cover bg-center absolute bg-no-repeat bg-fixed flex flex-col brightness-50 transition" alt="" />
            <Navbar />
        </div>
    )
};