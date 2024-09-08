import React, { useEffect, useState } from "react";
import { getCart, addToCart, removeFromCart } from '../../lib/cart';

export default function Cart({ cart, cartBtn, updateCartItems }) {
    const [cartItems, setCartItems] = useState([]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        const items = getCart();
        setCartItems(items);
    }, []);

    useEffect(() => {
        setSum(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
    }, [cartItems])

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(price);
    }; 

    const handleAdd = (item) => {
        addToCart(item);
        setCartItems(getCart());
        updateCartItems();
    };

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
        setCartItems(getCart());
        updateCartItems();
    };

    return (
        <div className={`fixed flex top-0 left-0 w-screen h-screen z-[100] backdrop-blur-lg select-none justify-end`}>
            <div className='2xl:w-[70%] h-full' onClick={cartBtn}></div>
            <div className={`w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] h-full bg-black/60 rounded-l-sm transition-all duration-[5000] transform ${cart ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col w-[90%] h-full mx-auto pr-2">
                    <div className="flex flex-row w-full justify-between items-center mx-auto px-6 mt-3 border-b border-b-white/70 pb-2">
                        <span className="text-3xl text-white">Cart</span>
                        <svg onClick={cartBtn}
                            className="fill-white h-11 w-11 flex cursor-pointer rounded-full"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
                            <path
                                d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z" />
                        </svg>
                    </div>
                    <div className="flex flex-col py-6 overflow-y-auto">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-white/90 text-[24px]">Your cart is empty.</p>
                        ) : (
                            cartItems.map((item, index) => (
                                <div key={index} className="flex flex-row items-center justify-between my-4 border-b border-b-white/10 pb-4">
                                    <div className="flex">
                                        <img src={item.images[0]} alt={item.name} className="w-[80px] h-[80px] rounded-lg object-cover" />
                                        <div className="flex flex-col ml-8 justify-between">
                                            <span className="lg:text-lg place-self-start text-white/80">{item.name}</span>
                                            <div className="flex flex-row border border-white/20 w-min rounded-md">
                                                <button onClick={() => handleRemove(item.id)} className="px-2 text-lg text-white">-</button>
                                                <span className="text-lg px-2 text-white">{item.quantity}</span>
                                                <button onClick={() => handleAdd(item)} className="px-2 text-lg text-white">+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-white/90 place-self-start text-xl pr-3">€{formatPrice(item.price)}</span>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="mt-auto border-t border-t-white/70 flex flex-col pb-6">
                        <div className="flex flex-row justify-between py-2 px-1">
                            <span className="text-xl text-white">Subtotal</span>
                            <span className="text-white text-2xl font-light">€{formatPrice(sum)}</span>
                        </div>
                        <a href="/checkout" className="w-full flex rounded-sm uppercase text-[14px] bg-white justify-center py-2">Proceed to checkout</a>
                        <p className="text-white/80 text-[12px] pt-1 self-center">Taxes and shipping will be calculated at checkout</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
