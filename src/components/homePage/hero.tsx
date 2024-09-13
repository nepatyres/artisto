import React, {useState, useLayoutEffect, useRef} from "react";
import Navbar from "../navbar";
import Image from 'next/image';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Hero() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const [cart, setCart] = useState(false);
    const cartBtn = () => {
        setCart(!cart);
    };

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (refs.current[0]) {
            const aboutTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: refs.current[0],
                    start: '+=300px center',
                    end: '+=600px',
                    scrub: true,
                    // markers: true
                }
            });

            aboutTimeline.fromTo(refs.current[0],
                { y: '0vh'},
                { y: '-10vh', duration: 2, ease: 'power2.out' }
            );
        }
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="h-screen w-full">
            <Image src="/images/bg.jpg" layout="fill" className="object-cover bg-cover bg-center absolute bg-no-repeat bg-fixed flex flex-col brightness-50 transition" alt="" />
            <Navbar cartBtn={cartBtn} cart={cart}/>
            <div className="flex mx-auto justify-center items-end h-full">
                <p ref={el => { if (el) refs.current[0] = el }} className="z-30 text-white/80 text-xl sm:text-2xl md:text-3xl xl:text-4xl self-center absolute font-roboto tracking-wider">Discover the perfect fusion of<br></br> automotive passion and art. </p>
            </div>
        </div>
    )
};