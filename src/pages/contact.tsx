import Navbar from '@/components/navbar'
import Head from 'next/head';
import '../app/globals.css';
import Footer from '@/components/footer';
import React, { useState, useEffect } from 'react';

export default function Contact() {
    const [cart, setCart] = useState(false);

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

    const cartBtn = () => setCart(!cart);

    return (
        <div className="items-center justify-center flex w-full min:h-screen flex-col">
            <Head>
                <title>Contact us</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar cartBtn={cartBtn} cart={cart} />
            <div className='items-center flex justify-center w-full h-screen flex-col'>
                <div className="font-roboto text-black">
                    <span className="flex justify-center mt-[50px] mb-2 text-black/90 tracking-wider text-4xl font-roboto">Call us</span>
                    <div className="flex justify-center text-[30px]">+370 634 34 555</div>
                </div>
                <div className="w-10/12 lg:w-[40%] xl:w-[30%]">
                    <span className="flex justify-center mt-[30px] mb-2 text-black/90 tracking-wider text-4xl font-roboto">Message us</span>
                    <form action="/api/send-email" method="POST" className='items-center text-[20px] font-roboto'>
                        <div className="mb-3">
                            <input type="name" className="bg-white text-black py-[6px] px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="name" placeholder="Name" name='name' required />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="bg-white text-black py-[6px] px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="email" placeholder="Email" name='email' required />
                        </div>
                        <div className="mb-3">
                            <textarea className="bg-white text-black py-[6px] px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="message" rows={6} placeholder="Your message" name='message' required></textarea>
                        </div>
                        <div className='email-btn'>
                            <button className='relative bg-black btnB items-center flex font-ubuntuL font-thin text-[20px] text-white text-md rounded-md' type="submit">
                                <span className="relative z-10 text-[15px] span inline-block text-center transition-colors text-white px-2 py-1" >Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='flex w-full h-auto items-end'>
                <Footer />
            </div>
        </div>
    )
}