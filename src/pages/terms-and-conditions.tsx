import '../app/globals.css';
import React, { useState, useEffect } from 'react';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Terms() {
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
    return (
        <div className="w-full min-h-full flex flex-col">
            <Navbar />
            <div className="flex flex-col mx-auto w-[80%] lg:w-[60%] xl:w-[50%] mt-40 mb-40 font-roboto h-min-[80vh]">
                <h1 className='text-2xl font-semibold mb-1'>Terms and Conditions</h1>
                <p className='mb-5'>These Terms and Conditions govern your use of our website, www.artisto.com, and the purchase of our products. By accessing or using our website and placing an order, you agree to be bound by these Terms and Conditions.</p>
                <h2 className='text-xl font-semibold mt-5'>General</h2>
                <h3 className='text-md ml-3'>By accessing the website and purchasing products from Artisto, you agree to comply with and be bound by these Terms and Conditions, as well as our Privacy Policy and Returns & Cancellation Policy. If you do not agree to any part of these terms, you should not use our website.</h3>
                <h2 className='text-xl font-semibold mt-5'>Products</h2>
                <h3 className='text-md ml-3'>1.1 Product Description: We specialize in selling metal cars in frames. We make every effort to ensure that the product descriptions, images, and information on our website are accurate. However, we cannot guarantee that your device’s display of colors will be entirely accurate.</h3>
                <h3 className='text-md ml-3'>1.2 Availability: All products are subject to availability. We reserve the right to limit the quantity of any products or discontinue any products at any time without notice.</h3>
                <h2 className='text-xl font-semibold mt-5'>Orders & Payments</h2>
                <h3 className='text-md ml-3'>2.1 Order Confirmation: After placing an order, you will receive an order confirmation email from us. This email does not signify acceptance of your order; it simply confirms that we have received it. We reserve the right to accept or decline your order for any reason.</h3>
                <h3 className='text-md ml-3'>2.2 Pricing: Prices are listed in € and include any applicable taxes. We reserve the right to modify the prices of our products at any time without notice.</h3>
                <h3 className='text-md ml-3'>2.3 Payment: We accept Bank cards as forms of payment. Full payment must be received before shipping your order.</h3>
                <h2 className='text-xl font-semibold mt-5'>Shipping</h2>
                <h3 className='text-md ml-3'>3.1 Shipping Policy: We ship worldwide. Shipping times may vary depending on your location. Once your order has shipped, you will receive an email with a tracking number.</h3>
                <h3 className='text-md ml-3'>3.2 Delays: We are not responsible for delays in shipping due to unforeseen circumstances such as customs processing or postal service delays.</h3>
                <h2 className='text-xl font-semibold mt-5'>Returns & Cancellations</h2>
                <h3 className='text-md ml-3'>Please refer to our
                    <a href="/return-and-cancellation" className='cursor-hover font-semibold'> Returns & Cancellation Policy </a>
                    for detailed information about returning or canceling an order.</h3>
                <h2 className='text-xl font-semibold mt-5'>Intellectual Property</h2>
                <h3 className='text-md ml-3'>4.1 Ownership: All content on this website, including text, images, logos, graphics, and other intellectual property, is the property of Artisto or our content providers. You may not reproduce, modify, or distribute any content from this website without our prior written consent.</h3>
                <h3 className='text-md ml-3'>4.2 Limited License: You are granted a limited, non-exclusive, and revocable license to access and use our website for personal, non-commercial purposes.</h3>
                <h2 className='text-xl font-semibold mt-5'>Limitation of Liability</h2>
                <h3 className='text-md ml-3'>To the fullest extent permitted by law, Artisto and its affiliates, directors, employees, or agents shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use our website, products, or services.</h3>
                <h2 className='text-xl font-semibold mt-5'>Indemnification</h2>
                <h3 className='text-md ml-3'>You agree to indemnify, defend, and hold harmless Artisto and its affiliates from any claim, demand, or damage, including reasonable attorneys' fees, arising out of your use of the website, your breach of these Terms and Conditions, or your violation of any law or the rights of a third party.</h3>
                <h2 className='text-xl font-semibold mt-5'>Governing Law</h2>
                <h3 className='text-md ml-3'>These Terms and Conditions are governed by and construed in accordance with the laws of Lithuania. Any disputes arising from these terms or your use of the website will be subject to the exclusive jurisdiction of the courts of Lithuania.</h3>
                <h2 className='text-xl font-semibold mt-5'>Changes to Terms</h2>
                <h3 className='text-md ml-3'>We reserve the right to modify or update these Terms and Conditions at any time without prior notice. It is your responsibility to check this page periodically for any changes. Your continued use of the website after any modifications constitutes acceptance of the updated terms.</h3>
                <h2 className='text-xl font-semibold mt-5'>Contact Information</h2>
                <h3 className='text-md ml-3'>If you have any questions or need assistance with your return or cancellation, please
                    <a href="/contact" className='cursor-hover font-semibold'> contact </a>
                    us at contactartisto@gmail.com. We’re here to help!</h3>
            
            </div>
            <Footer />
        </div>
    )
}