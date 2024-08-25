import Navbar from '@/components/navbar'
import '../app/globals.css'
import Footer from '@/components/footer'
import React, { useState } from 'react';

export default function Contact() {
    const [cart, setCart] = useState(false);
    const cartBtn = () => {
        setCart(!cart);
    };

    return (
        <div className="items-center justify-center flex w-full h-screen flex-col">
            <Navbar cartBtn={cartBtn} cart={cart} />
            <div className='items-center flex justify-center w-full h-full flex-col'>
                <div className="font-ubuntuL text-black">
                    <span className="flex justify-center mt-[50px] mb-2.5 text-black/90 tracking-wider text-[35px]">CALL US</span>
                    <div className="flex justify-center text-[30px]">+370 634 34 555</div>
                </div>
                <div className="w-10/12 lg:w-1/3">
                    <span className="flex justify-center mt-[30px] mb-2.5 text-black/90 tracking-wider text-[35px]">MESSAGE US</span>
                    <form action="/api/send-email"  method="POST" className='items-center text-[20px]'>
                        <div className="mb-3">
                            <input type="name" className="bg-white text-black py-[6px] px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="name"  placeholder="Name" name='name' required />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="bg-white text-black py-[6px] px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="email" placeholder="Email" name='email' required />
                        </div>
                        <div className="mb-3">
                            <textarea className="bg-white text-black py-[6px] px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="message" rows={6} placeholder="Your message" name='message' required></textarea>
                        </div>
                        <div className='email-btn'>
                            <button className='font-ubuntuL font-thin text-[20px] bg-transparent hover:bg-[#c1d8f026] transition-colors ease-in duration-500 bg-black text-black focus:bg-black focus:text-white border border-[#c1d8f0cc] rounded-[5px] mt-0 ml-0.5 py-px px-2' type="submit">
                                Submit
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