import React from "react";
import { addToCart } from '../../lib/cart';
export default function CartBtn({ product, cartBtn }) {
    const handleAddToCart = () => {
        addToCart(product);
        cartBtn();
    };
    return (
        <button onClick={() => handleAddToCart()} className="w-full border border-black bg-black text-white rounded-md px-2 py-2 text-md btnw">ADD TO CART</button>
    )
}