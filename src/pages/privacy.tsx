import '../app/globals.css'
import React, {useState, useEffect} from 'react';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Privacy() {
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
                <h1 className='text-2xl font-semibold mb-1'>Privacy Policy</h1>
                <p className='mb-5'>At Artisto, we are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, www.artisto.com. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.</p>
                <h2 className='text-xl font-semibold mt-5'>Information We Collect</h2>
                <h3 className='text-md font-semibold'>We may collect and process the following types of personal data:</h3>
                <h3 className='text-md ml-3'>1.1 Personal Identification Information: such as your name, email address, shipping address, phone number, and payment details when you make a purchase.</h3>
                <h3 className='text-md ml-3'>1.2 Browsing Information: such as your IP address, browser type, and information about your visit (e.g., pages you visited, time spent on the site).</h3>
                <h3 className='text-md ml-3'>1.3 Communication Data: such as any information you provide when contacting us via email (e.g., inquiries or feedback).</h3>
                <h2 className='text-xl font-semibold mt-5'>How We Use Your Information</h2>
                <h3 className='text-md font-semibold'>We use the information we collect in the following ways:</h3>
                <h3 className='text-md ml-3'>2.1 Order Processing: To process and deliver your orders, provide updates on your purchases, and manage your payments.</h3>
                <h3 className='text-md ml-3'>2.2 Customer Support: To respond to your inquiries, provide technical assistance, and offer customer support.</h3>
                <h3 className='text-md ml-3'>2.3 Personalization: To personalize your shopping experience by showing products or content based on your preferences.</h3>
                <h3 className='text-md ml-3'>2.4 Marketing: With your consent, to send promotional emails, newsletters, and updates about our products, offers, and services.</h3>
                <h3 className='text-md ml-3'>2.5 Improving Our Website: To analyze how our website is used and to enhance its features, content, and user experience.</h3>
                <h2 className='text-xl font-semibold mt-5'>Sharing Your Information</h2>
                <h3 className='text-md font-semibold'>We do not sell or trade your personal information to third parties. However, we may share your data with:</h3>
                <h3 className='text-md ml-3'>3.1 Service Providers: Third-party companies that help us operate our website, process payments, ship orders, or provide customer support (e.g., payment processors, delivery services).</h3>
                <h3 className='text-md ml-3'>3.2 Legal Requirements: If required by law or if we believe such action is necessary to comply with legal obligations, protect our rights, or ensure the safety of our users.</h3>
                <h2 className='text-xl font-semibold mt-5'>Data Security</h2>
                <h3 className='text-md ml-3'>We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, use, or disclosure. However, no data transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.</h3>
                <h2 className='text-xl font-semibold mt-5'>Data Security</h2>
                <h3 className='text-md font-semibold'>You have the following rights regarding your personal data:</h3>
                <h3 className='text-md ml-3'>5.1 Access: The right to request a copy of the personal data we hold about you.</h3>
                <h3 className='text-md ml-3'>5.2 Correction: The right to request corrections to any inaccurate or incomplete personal data.</h3>
                <h3 className='text-md ml-3'>5.3 Deletion: The right to request the deletion of your personal data in certain circumstances.</h3>
                <h3 className='text-md ml-3'>5.4 Restriction: The right to request that we restrict the processing of your personal data.</h3>
                <h3 className='text-md ml-3'>5.5 Objection: The right to object to our processing of your personal data.</h3>
                <h3 className='text-md  ml-3'>To exercise any of these rights, please
                    <a href="/contact" className='cursor-hover font-semibold'> contact </a>
                    us at contactartisto@gmail.com.</h3>
                <h2 className='text-xl font-semibold mt-5'>Data Security</h2>
                <h3 className='text-md ml-3'>Our website uses cookies to enhance your browsing experience. Cookies are small text files placed on your device that help us understand how our site is used and remember your preferences. You can control cookie settings through your browser.</h3>
                <h2 className='text-xl font-semibold mt-5'>Third-Party Links</h2>
                <h3 className='text-md ml-3'>Our website may contain links to third-party websites. Please note that we are not responsible for the privacy practices of these sites. We encourage you to read the privacy policies of any website you visit.</h3>
                <h2 className='text-xl font-semibold mt-5'>Changes to This Privacy Policy</h2>
                <h3 className='text-md ml-3'>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and the revised date will be updated at the top of the policy.</h3>
                <h2 className='text-xl font-semibold mt-5'>Contact Us</h2>
                <h3 className='text-md ml-3'>If you have any questions about this Privacy Policy or how we handle your personal data, please
                    <a href="/contact" className='cursor-hover font-semibold'> contact </a>
                    us at contactartisto@gmail.com.</h3>
            </div>
            <Footer />
        </div>
    )
}