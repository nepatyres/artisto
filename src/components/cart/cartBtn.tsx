import React from "react";
import { addToCart } from '../../lib/cart';
export default function CartBtn({ product, cartBtn }:any) {
    const handleAddToCart = () => {
        addToCart(product);
        cartBtn();
    };
    return (
        <button onClick={() => handleAddToCart()} className="w-full rounded-md px-2 py-2 text-md btnB relative text-center cursor-pointer bg-black">
            <span className="relative z-10 text-md span inline-block text-center transition-colors text-white">ADD TO CART</span>
        </button>
    )
}