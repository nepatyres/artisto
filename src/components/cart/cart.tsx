import React, { useEffect, useState } from "react";
import { getCart, addToCart, removeFromCart } from '../../lib/cart';

export default function Cart({ cart, cartBtn }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = getCart();
        setCartItems(items);
    }, []);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    const handleAdd = (item) => {
        addToCart(item);
        setCartItems(getCart());
    };

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
        setCartItems(getCart());
    };

    return (
        <div className={`fixed flex top-0 left-0 w-screen h-screen z-[100] backdrop-blur-lg select-none justify-end`}>
            <div className={`w-[80%] xl:w-[40%] 2xl:w-[30%] h-full bg-black/60 transition-all duration-[5000] transform ${cart ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col w-full h-full">
                    <div className="flex flex-row w-full justify-between items-center mx-auto px-6 mt-3">
                        <span className="text-3xl text-white">Cart</span>
                        <svg onClick={cartBtn}
                            className="fill-white h-11 w-11 flex cursor-pointer rounded-full"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
                            <path
                                d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z" />
                        </svg>
                    </div>
                    <div className="flex flex-col p-6 overflow-y-auto">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-gray-500">Your cart is empty.</p>
                        ) : (
                            cartItems.map((item, index) => (
                                <div key={index} className="flex flex-row items-center justify-between my-4 border-b pb-4">
                                    <div className="flex">
                                        <img src={item.images[0]} alt={item.name} className="w-[80px] h-[80px] rounded-lg object-cover" />
                                        <div className="flex flex-col ml-8 justify-between">
                                            <span className="lg:text-lg place-self-start text-white">{item.name}</span>
                                            <div className="flex flex-row border border-white/20 w-min rounded-md">
                                                <button onClick={() => handleRemove(item.id)} className="px-2 text-lg text-white">-</button>
                                                <span className="text-lg px-2 text-white">{item.quantity}</span>
                                                <button onClick={() => handleAdd(item)} className="px-2 text-lg text-white">+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-white/70 place-self-start text-xl">€{formatPrice(item.price)}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
