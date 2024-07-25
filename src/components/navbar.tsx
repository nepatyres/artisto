import { navbar } from "@/constants";
import React from "react";
import CartSvg from "./svg/cart";

export default function Navbar() {
    return (
        <nav className="fixed h-16 top-3 w-[95%] bg-black/40 rounded-3xl z-[9999] left-1/2 transform -translate-x-1/2">
            <div className="grid grid-cols-3 h-full">
                <a href="/" className="flex justify-start items-center text-white text-2xl uppercase pl-8 cursor-pointer">ARTISTO</a>
                <ul className="flex flex-row justify-center items-center gap-5">
                    {navbar.map((nav, i) => (
                        <li key={i} className="text-white">
                            <a href={nav.link} className="cursor-pointer text-lg">{nav.name}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-end items-center pr-8">
                    <a href="/cart">
                        <CartSvg />
                    </a>
                </div>
            </div>
        </nav>
    )
};