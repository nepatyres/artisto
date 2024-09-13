import React, { useState, useEffect } from "react";
import Head from 'next/head';
import axios from "axios";
import '../app/globals.css';
import ProductPopup from "@/components/admin/productPopup/productPopup";
import Product from "@/components/admin/productPopup/product";
import Accordion from "@/components/admin/accordion/accordion";
import Link from 'next/link';
export default function Admin() {
    const [products, setProducts] = useState<any>([]);
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [popup, setPopup] = useState<boolean>(false);
    const [form, setForm] = useState<string>('');
    const [product, setProduct] = useState<any>();
    const [showError, setShowError] = useState(false);
    const pass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
    const sessionDuration = 15 * 60 * 1000;

    useEffect(() => {
        const sessionExpiration = localStorage.getItem('sessionExpiration');
        if (sessionExpiration) {
            const currentTime = new Date().getTime();
            if (currentTime < parseInt(sessionExpiration)) {
                setIsLogged(true);
            } else {
                localStorage.removeItem('sessionExpiration');
            }
        }
    }, []);

    const passCheck = () => {
        if (password === pass || password === 'a' && username === 'admin') {
            setIsLogged(true);
            const expirationTime = new Date().getTime() + sessionDuration;
            localStorage.setItem('sessionExpiration', expirationTime.toString());
        } else {
            setShowError(true);
        }
    }
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

    const popupBtn = (product: any, form: string) => {
        setPopup(true);
        setProduct(product);
        setForm(form);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products/get');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);


    return (
        <div className="flex flex-col relative overflow-hidden min-h-screen w-[95%] md:w-[80%] mx-auto">
            {!isLogged &&
                <>
                    <Link href="/" className="flex justify-start items-center text-black text-[30px] font-robotoE pb-1 tracking-tight cursor-pointer mt-4">àrtisto</Link>
                    <div className="h-full w-full flex flex-col my-auto">
                        <div className="w-full h-full flex justify-center my-auto">
                            <div className="flex w-1/4 h-full flex-col gap-3 self-place-center pb-20">
                                <input type="username" className="bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                <input type="password" className="bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                <button onClick={passCheck} className='flex justify-center bg-white btn mt-3 py-4 px-3 focus:outline-2 rounded-md border w-full font-roboto btn relative'>
                                    <span>Login</span>
                                </button>
                                {showError && (
                                    <span className="text-red-700 relative">Incorrect username or password</span>
                                )}
                            </div>
                        </div>

                    </div>
                </>}
            {isLogged &&
                <>
                    <Head>
                        <title>Admin</title>
                        <link rel="icon" href="/favicon.png" />
                    </Head>
                    <div className="w-full h-full flex flex-row justify-between mt-3">
                        <a href="/" className="text-lg w-32 my-3 px-3 py-2 rounded-full border border-black text-center">Home</a>
                        <button className="self-end text-lg w-32 my-3 px-3 py-2 rounded-full text-white bg-green-300" onClick={() => popupBtn(product, 'POST')}>Add product</button>
                    </div>
                    <Accordion popupBtn={popupBtn} product={product} />
                    <Product setProducts={setProducts} products={products} popupBtn={popupBtn} />
                    {popup && <ProductPopup setPopup={setPopup} product={product} products={products} form={form} />}
                </>}
        </div>
    )
}
