import React, {useState} from "react";
import Navbar from "../navbar";

export default function Hero() {
    const [cart, setCart] = useState(false);
    const cartBtn = () => {
        setCart(!cart);
    };
    return (
        <div className="h-screen w-full">
            <img src="/images/bg.jpg" className="w-full h-screen object-cover bg-cover bg-center absolute bg-no-repeat bg-fixed flex flex-col brightness-50 transition" alt="" />
            <Navbar cartBtn={cartBtn} cart={cart}/>
            <div className="flex w-[80%] mx-auto">
                <p className="z-30 text-white/80 text-6xl absolute top-[50%]">Discover the perfect fusion of automotive passion and art. </p>
            </div>
        </div>
    )
};