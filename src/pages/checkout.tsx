
import '../app/globals.css'
import { footer } from '@/constants';
import { useRouter } from "next/router";
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import OneProduct from '@/components/checkout/oneProduct';
import CartCheckout from '@/components/checkout/cartCheckout';
import LeftSide from '@/components/checkout/leftSide';
import { getCart } from '@/lib/cart';
import Link from 'next/link';

export default function Checkout() {
    const [cartItems, setCartItems] = useState([]);
    const [sum, setSum] = useState(0);
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        const items = getCart();
        setCartItems(items);
    }, []);

    useEffect(() => {
        setSum(cartItems.reduce((acc, item:any) => acc + item.price * item.quantity, 0));
    }, [cartItems])

    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
                setTimeout(() => {
                    document.body.style.cursor = 'default'
                    window.scrollTo(0, 0);
                }, 2000)
            }
        )()
    }, [])

    const formatPrice = (price:number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(price);
    };

    const router = useRouter();
    useEffect(() => {
        if (router.query.product) {
            setProduct(JSON.parse(router.query.product as string));
        }
    }, [router.query]);
    return (
        <div className="min-h-screen w-full">
            <Head>
                <title>Checkout - àrtisto</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className='width-full flex flex-col'>
                <div className='w-full h-[10vh] border-b justify-center items-center flex'>
                    <Link href="/" className=" text-black mix-blend-difference text-4xl font-robotoE pb-1 tracking-tight cursor-pointer">àrtisto</Link>
                </div>
                <div className='w-full h-full grid lg:grid-cols-2 flex-col'>
                    <LeftSide footer={footer} />
                    <div className='flex w-full mb-20 lg:mb-0'>
                        <div className='flex lg:border-r w-full lg:justify-start justify-center'>
                            <div className='flex w-[80%] md:w-[60%] lg:w-[90%] xl:w-[80%] 2xl:w-[60%] lg:pl-10 flex-col'>
                                <span className='flex lg:hidden text-2xl font-roboto mt-8 b-4'>Order summary</span>
                                <div className="flex flex-col lg:my-6 overflow-y-auto border-b">
                                    {product ? (
                                        <OneProduct product={product} />
                                    ) : cartItems && cartItems.length > 0 ? (
                                        <CartCheckout cartItems={cartItems} />
                                    ) : (
                                        <p className="text-center text-bdot9 text-[24px] my-4 font-roboto">Your cart is empty.</p>
                                    )}
                                </div>
                                <div className='flex flex-col w-full lg:w-[90%] mx-auto mt-4'>
                                    <div className='flex flex-row justify-between'>
                                        <span className='font-lato text-xl'>Subtotal</span>
                                        <span className='font-lato text-xl'>{product ? `€${formatPrice(product.price)}` : cartItems && cartItems.length > 0 ? `€${formatPrice(sum)}` : '€ 0'}</span>
                                    </div>
                                    <div className='flex flex-row justify-between mb-2'>
                                        <span className='font-lato text-xl'>Shipping</span>
                                        <span className='font-lato text-xl'>Free</span>
                                    </div>
                                    <div className='flex flex-row justify-between border-t pt-2'>
                                        <span className='font-lato text-2xl'>Total</span>
                                        <span className='font-lato text-2xl'>{product ? `€${formatPrice(product.price)}` : cartItems && cartItems.length > 0 ? `€${formatPrice(sum)}` : '€ 0'}</span>
                                    </div>
                                    <button className='bg-black flex justify-center lg:hidden text-white mt-3 py-4 px-3 focus:outline-2 rounded-md border w-full font-roboto btnB relative'><span>Review order</span></button>
                                    <div className='w-full mt-4 border-t flex lg:hidden'>
                                        <div className='flex w-full flex-row mt-4 justify-between px-4'>
                                            {footer[1].links.map((link, i) => (
                                                <Link key={i} href={link.link} className="text-bdot8 afooter font-robotoL text-[12px]">{link.name}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}