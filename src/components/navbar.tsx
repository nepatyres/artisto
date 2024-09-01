import { navbar } from "@/constants";
import React, { useState, useEffect } from "react";
import CartSvg from "./svg/cart";
import Cart from "./cart/cart";
import { getCart } from "@/lib/cart";

export default function Navbar({ cartBtn, cart }) {
    const [toggler, setToggler] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const togglerBtn = () => {
        setToggler(!toggler);
    };

    const updateCartItems = () => {
        const items = getCart();
        setCartItems(items);
    };

    useEffect(() => {
        updateCartItems();
    }, []);

    return (
        <>
            <nav className="fixed h-16 top-3 w-[95%] bg-black/40 backdrop-blur-md rounded-3xl left-1/2 transform -translate-x-1/2 select-none z-[40]">
                <div className="grid grid-cols-2 md:grid-cols-3 h-full">
                    <a href="/" className="flex justify-start items-center text-white mix-blend-difference text-[35px] font-thin pl-10 cursor-pointer">àrtisto</a>
                    <ul className="hidden md:flex flex-row justify-center items-center gap-8">
                        {navbar.map((nav, i) => (
                            <li key={i} className="text-white">
                                <a href={nav.link} className="cursor-pointer text-xl font-light">{nav.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-end items-center pr-5">
                        <button className="mr-2 pb-[2px]" onClick={cartBtn}><CartSvg updateCartItems={updateCartItems} numItems={cartItems.reduce((acc, item) => acc + item.quantity, 0)} /></button>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={togglerBtn} className='md:hidden h-[33px] w-[33px] rounded-full stroke-white stroke-[1.5] cursor-pointer'
                            viewBox="0 0 23 16">
                            <g className='h-4 w-4' fillRule="evenodd" strokeLinecap="round">
                                <path d="M3.429.75h15M1.429 7.75h20M3.429 14.80h15" />
                            </g>
                        </svg>
                    </div>
                </div>
            </nav>
            {cart && <Cart cart={cart} cartBtn={cartBtn} updateCartItems={updateCartItems} />}

            <div className={`fixed top-0 left-0 w-screen h-screen z-[150] md:hidden backdrop-blur-lg select-none justify-end ${toggler ? 'flex' : 'hidden'}`}>
                <div className="w-[80%] h-full right-0 bg-black/60">
                    <div className="flex flex-col w-full h-full">
                        <svg onClick={togglerBtn}
                            className="fill-white h-11 w-11 flex cursor-pointer absolute right-[18px] top-[10px] mr-6 mt-3 rounded-full z-[9999]"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
                            <path
                                d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z" />
                        </svg>
                        <ul className="flex flex-col items-center justify-center h-full gap-8 z-[200]">
                            {navbar.map((nav, i) => (
                                <a key={i} href={nav.link} className="text-7xl text-white/90 stroke-2 stroke-red">{nav.name}</a>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};