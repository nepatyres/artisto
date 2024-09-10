import '../app/globals.css'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
export default function Terms() {
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
        <div className="w-full min-h-full flex flex-col">
            <Head>
                <title>Returns & Cancellation Policy</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar cartBtn={cartBtn} cart={cart} />
            <div className="flex flex-col mx-auto w-[80%] lg:w-[60%] xl:w-[50%] mt-40 mb-40 font-roboto h-min-[80vh]">
                <h1 className='text-2xl font-semibold mb-1'>Returns & Cancellation Policy</h1>
                <p className='mb-5'>At Artisto, we strive to ensure that you are fully satisfied with your purchase of our products. If you are not completely happy with your order, we’re here to help.</p>
                <h2 className='text-xl font-semibold mt-5'>Returns</h2>
                <h3 className='text-md ml-3'>1.1 Return Period: You have 14 days from the date you receive your item to request a return.</h3>
                <h3 className='text-md ml-3'>1.2 Condition of Returned Items: To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</h3>
                <h3 className='text-md ml-3'>1.3 Non-Returnable Items: All items purchased on Artisto are eligible for return, provided they meet the condition requirements.</h3>
                <h3 className='text-md ml-3'>1.4 Refund or Exchange: Once we receive your returned item, we will inspect it and notify you of the approval or rejection of your refund or exchange request. If approved, we will process your refund or exchange within 14 days.</h3>
                <h2 className='text-xl font-semibold mt-5'>Cancellations</h2>
                <h3 className='text-md ml-3'>Order Cancellation: You can cancel your order any time before it has been shipped. If you wish to cancel an order, please contact us as soon as possible at contactartisto@gmail.com. Once your order has shipped, it cannot be canceled, but you may return it following the procedure outlined above.</h3>
                <h2 className='text-xl font-semibold mt-5'>Shipping Costs for Returns</h2>
                <h3 className='text-md ml-3'>Free Returns: We offer free returns for all orders. We will provide a prepaid shipping label once your return is approved.</h3>
                <h2 className='text-xl font-semibold mt-5'>International Returns</h2>
                <h3 className='text-md ml-3'>Global Returns: We accept returns from customers worldwide. The same return period and conditions apply.</h3>
                <h2 className='text-xl font-semibold mt-5'>Proof of Purchase</h2>
                <h3 className='text-md ml-3'>Required Documentation: To process your return or cancellation, you must provide proof of purchase, such as your order number and receipt.</h3>
                <h2 className='text-xl font-semibold mt-5'>Contact Information</h2>
                <h3 className='text-md ml-3'>If you have any questions or need assistance with your return or cancellation, please
                    <a href="/contact" className='cursor-hover font-semibold'> contact </a>
                    us at contactartisto@gmail.com. We’re here to help!</h3>
            </div>
            <Footer />
        </div>
    )
}