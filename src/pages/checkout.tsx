import { footer } from '@/constants';
import '../app/globals.css'
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
export default function Checkout() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [product, setProduct] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const countries = ["United States", "Canada", "Mexico", "Argentina", "Brazil", "Chile", "Colombia", "Uruguay", "Paraguay", "Peru", "United Kingdom", "France", "Germany", "Spain", "Italy", "Sweden", "Norway", "Denmark", "Finland", "Netherlands", "Belgium", "Austria", "Switzerland", "Ireland", "Portugal", "Greece", "Poland", "Czech Republic", "Hungary", "Romania", "Croatia", "Slovakia", "Slovenia", "Estonia", "Latvia", "Lithuania", "Australia", "New Zealand", "Fiji", "Japan", "South Korea", "Singapore", "Taiwan", "Malaysia", "Thailand", "Vietnam", "United Arab Emirates", "Israel", "Qatar", "Saudi Arabia", "Oman", "Kuwait", "Costa Rica", "Panama", "Jamaica", "Barbados", "Bahamas", "Trinidad and Tobago", "Dominican Republic"];

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

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(price);
    };

    useEffect(() => {
        const storedProduct = localStorage.getItem('selectedProduct');
        const cartStoredProduct = localStorage.getItem('cartSelectedProduct');
        if (storedProduct) {
            setProduct(JSON.parse(storedProduct));
        } else if (cartStoredProduct) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };
    return (
        <div className="min-h-screen w-full">
            <Head>
                <title>Checkout - àrtisto</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className='width-full flex flex-col'>
                <div className='w-full h-[10vh] border-b justify-center items-center flex'>
                    <a href="/" className=" text-black mix-blend-difference text-4xl font-robotoE pb-1 tracking-tight cursor-pointer">àrtisto</a>
                </div>
                <div className='w-full h-full grid lg:grid-cols-2 flex-col'>
                    <div className='flex lg:border-r w-full lg:justify-end justify-center'>
                        <div className='flex mt-8 w-[80%] md:w-[60%] lg:w-[90%] xl:w-[80%] 2xl:w-[60%] lg:pr-10 flex-col lg:mb-20'>
                            <div className='flex flex-col'>
                                <span className='text-2xl font-roboto mb-4'>Contact</span>
                                <input type="email" className="bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="email" placeholder="Email" name='email' required />
                                <div className='justify-start flex flex-row items-center mt-1'>
                                    <input className='self-start w-4 h-4 mt-2' type="checkbox" name="" id="" />
                                    <span className='font-roboto pl-2 mt-1'>Email me with news and offers</span>
                                </div>
                            </div>
                            <div className='flex flex-col mt-4'>
                                <span className='text-2xl font-roboto mt-8 mb-4'>Delivery</span>
                                <select name="country" id="country" value={selectedCountry} onChange={handleCountryChange} className='bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full'>
                                    <option value="">Select a country</option>
                                    {countries.map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                                <div className='flex flex-row mt-3 gap-2'>
                                    <input type="name" className="bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="name" placeholder="Name" name='name' required />
                                    <input type="name" className="bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="lastName" placeholder="Last Name" name='lastName' required />
                                </div>
                                <input type="company" className="bg-white text-black mt-3 py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="company" placeholder="Company (optional)" name='company' />
                                <input type="address" className="bg-white text-black mt-3 py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="address" placeholder="Address" name='address' required />
                                <input type="address" className="bg-white text-black mt-3 py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="address" placeholder="Apartment, suite, etc. (optional)" name='address' required />
                                <div className='flex flex-row mt-3 gap-2'>
                                    <input type="code" className="bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="postCode" placeholder="Post code" name='postCode' required />
                                    <input type="name" className="bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="city" placeholder="City" name='city' required />
                                </div>
                                <input type="phone" className="bg-white text-black mt-3 py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="phone" placeholder="Phone" name='phone' required />
                                <button className='bg-black hidden justify-center lg:flex text-white mt-3 py-4 px-3 focus:outline-2 rounded-md border w-full font-roboto btnB relative'>
                                    <span>Review order</span>
                                </button>
                            </div>
                            <div className='w-full mt-4 border-t hidden lg:flex'>
                                <div className='flex w-full flex-row mt-4 justify-between px-4'>
                                    {footer[1].links.map((link, i) => (
                                        <a key={i} href={link.link} className="text-bdot8 afooter font-robotoL text-[12px]">{link.name}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full mb-20 lg:mb-0'>
                        <div className='flex lg:border-r w-full lg:justify-start justify-center'>
                            <div className='flex w-[80%] md:w-[60%] lg:w-[90%] xl:w-[80%] 2xl:w-[60%] lg:pl-10 flex-col'>
                                <span className='flex lg:hidden text-2xl font-roboto mt-8 b-4'>Order summary</span>
                                <div className="flex flex-col lg:my-6 overflow-y-auto border-b">
                                    {cartItems && cartItems.length > 0 ? (
                                        cartItems.map((item, i) => (
                                            <div key={i} className="flex flex-row items-center justify-between my-4 border-b border-b-white/10">
                                                <div className="flex">
                                                    <img src={item.images[0]} alt={item.name} className="w-[80px] h-[80px] rounded-lg object-cover" />
                                                    <div className="flex flex-col ml-8">
                                                        <span className="lg:text-lg place-self-start text-bdot8">{item.name}</span>
                                                        <span className="text-bdot9 place-self-start text-xl pr-3 pt-2">€{formatPrice(item.price)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : product && product.length > 0 ? (
                                        <div className="flex flex-row items-center justify-between my-4 border-b border-b-white/10">
                                            <div className="flex">
                                                <img src={product.images[0]} alt={product.name} className="w-[80px] h-[80px] rounded-lg object-cover" />
                                                <div className="flex flex-col ml-8">
                                                    <span className="lg:text-lg place-self-start text-bdot8">{product.name}</span>
                                                    <span className="text-bdot9 place-self-start text-xl pr-3 pt-2">€{formatPrice(product.price)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-center text-bdot9 text-[24px] my-4 font-roboto">Your cart is empty.</p>
                                    )}
                                </div>
                                <div className='flex flex-col w-full lg:w-[90%] mx-auto mt-4'>
                                    <div className='flex flex-row justify-between'>
                                        <span className='font-lato text-xl'>Subtotal</span>
                                        <span className='font-lato text-xl'>{product ? `€${formatPrice(product.price)}` : `€${formatPrice(0)}`}</span>
                                    </div>
                                    <div className='flex flex-row justify-between mb-2'>
                                        <span className='font-lato text-xl'>Shipping</span>
                                        <span className='font-lato text-xl'>Free</span>
                                    </div>
                                    <div className='flex flex-row justify-between border-t pt-2'>
                                        <span className='font-lato text-2xl'>Total</span>
                                        <span className='font-lato text-2xl'>{product ? `€${formatPrice(product.price)}` : `€${formatPrice(0)}`}</span>
                                    </div>
                                    <button className='bg-black flex justify-center lg:hidden text-white mt-3 py-4 px-3 focus:outline-2 rounded-md border w-full font-roboto btnB relative'><span>Review order</span></button>
                                    <div className='w-full mt-4 border-t flex lg'>
                                        <div className='flex w-full flex-row mt-4 justify-between px-4'>
                                            {footer[1].links.map((link, i) => (
                                                <a key={i} href={link.link} className="text-bdot8 afooter font-robotoL text-[12px]">{link.name}</a>
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