import React, {useState} from "react";
import Navbar from "../navbar";
import Image from 'next/image';

export default function Hero() {
    const [cart, setCart] = useState(false);
    const cartBtn = () => {
        setCart(!cart);
    };
    return (
        <div className="h-screen w-full">
            <Image src="/images/bg.jpg" layout="fill" className="object-cover bg-cover bg-center absolute bg-no-repeat bg-fixed flex flex-col brightness-50 transition" alt="" />
            <Navbar cartBtn={cartBtn} cart={cart}/>
            <div className="flex mx-auto justify-center items-end h-full">
                <p className="z-30 text-white/80 text-xl sm:text-2xl md:text-3xl xl:text-4xl self-center absolute font-roboto tracking-wider">Discover the perfect fusion of<br></br> automotive passion and art. </p>
            </div>
        </div>
    )
};