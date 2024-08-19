import React from "react";
import { addToCart } from '../../lib/cart';
export default function CartBtn({ product }) {
    const handleAddToCart = () => {
        addToCart(product);
    };
    return (
        <button onClick={handleAddToCart} className="w-full border border-black bg-black text-white rounded-md px-2 py-2 text-md">ADD TO CART</button>
    )
}