import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { collection } from "@/constants/products";

gsap.registerPlugin(ScrollTrigger);
export default function Collections() {

    const refs = useRef(collection.map(() => ({ bg: null, info: null })))

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        refs.current.forEach((ref, i) => {
            console.log(ref)
            const bgTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.bg,
                    start: 'top bottom',
                    end: '+=600px',
                    scrub: true,
                    // markers: true
                }
            });

            const infoTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.info,
                    start: 'center center+=100',
                    end: '+=100px',
                    scrub: true,
                    // markers: true
                }
            });

            bgTimeline.fromTo(ref.bg,
                { x: '25vw', y: '10vh' },
                { x: '0vw', y: '0vh' }
            );

            infoTimeline.fromTo(ref.info,
                { x: '-5vw', opacity: '0%' }, { x: '0vw', opacity: '100%' }
            )
        })
    }, [])

    return (
        <div className="w-full overflow-hidden bg-black">

            {collection.map((product, i) => (
                <div key={i} className="w-full h-[50vh] xl:h-screen flex mx-auto">
                    <div className="w-[80%] h-[90%] m-auto relative">
                        <div ref={el => refs.current[i].info = el} className="absolute flex inset-0 justify-end items-end p-12 z-50">
                            <div className="py-2 px-2 bg-white/50 z-40 rounded-2xl shadow-2xl">
                                <div className="p-4 mx-auto flex flex-col">
                                    <span className="text-[18px] leading-5">{product.name.toUpperCase()}</span>
                                    <span className="text-[20px] leading-8">{product.price}</span>
                                    <div className="flex justify-end">
                                        <div className="flex justify-center text-center items-center p-3 bg-black rounded-xl cursor-pointer">
                                            <a href="/ha" className="cursor-pointer text-white">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={el => refs.current[i].bg = el} className="w-full h-full rounded-2xl">
                            <img src={`${product.bg}`} className="w-full h-full cover center rounded-2xl transition-transform duration-300 ease-in-out zoom" alt="" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}