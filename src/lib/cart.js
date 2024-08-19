// lib/cart.js
import Cookies from 'js-cookie';

export const addToCart = (item) => {
    let cart = JSON.parse(Cookies.get('cart') || '[]');

    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    Cookies.set('cart', JSON.stringify(cart), { expires: 7 });
};

export const removeFromCart = (itemId) => {
    let cart = JSON.parse(Cookies.get('cart') || '[]');

    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === itemId);

    if (existingItemIndex !== -1) {
        if (cart[existingItemIndex].quantity > 1) {
            cart[existingItemIndex].quantity -= 1;
        } else {
            cart.splice(existingItemIndex, 1);
        }
    }

    Cookies.set('cart', JSON.stringify(cart), { expires: 7 });
};

export const getCart = () => {
    return JSON.parse(Cookies.get('cart') || '[]');
};

