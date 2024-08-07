import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

export default function Bestseller({ setIsLoading }) {
    const [products, setProducts] = useState<any>([]);
    const refs = useRef<{ bg: HTMLDivElement | null, info: HTMLDivElement | null }[]>([]);
    const [bestseller, setBestseller] = useState<any[]>([]);
    useEffect(() => {
        setIsLoading(false)
        const fetchProducts = async () => {
            const response = await axios.get('/api/products/get');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchBestseller = async () => {
            const response = await axios.get('/api/bestseller/get');
            setBestseller(response.data);

            refs.current = response.data.map(() => ({ bg: null, info: null }));
        };
        fetchBestseller();
    }, []);

    useEffect(() => {
        if (refs.current.length === 0) return;

        refs.current.forEach((ref, i) => {
            if (!ref.bg || !ref.info) return;
            const bgTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.bg,
                    start: 'top bottom',
                    end: '+=600px',
                    scrub: true,
                }
            });
            const infoTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.info,
                    start: 'center center+=100',
                    end: '+=100px',
                    scrub: true,
                }
            });
            bgTimeline.fromTo(ref.bg,
                { x: '25vw', y: '10vh' },
                { x: '0vw', y: '0vh' }
            );
            infoTimeline.fromTo(ref.info,
                { x: '-5vw', opacity: 0 }, { x: '0vw', opacity: 1 }
            );
        });
    }, [products, bestseller]);

    const redirectBtn = (id: string) => {
        window.location.href = `/products/${id}`;
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="w-full overflow-hidden bg-white mt-12">
            <div className="flex w-[80%] mx-auto mt-12 mb-4">
                <span className="text-5xl">BESTSELLER</span>
            </div>
            {bestseller.map((product, i) => (
                <div key={i} className="w-full h-[50vh] xl:h-screen flex mx-auto cursor-pointer" onClick={() => redirectBtn(product.id)}>
                    <div className="w-[80%] h-[90%] m-auto relative">
                        <div ref={el => refs.current[i] && (refs.current[i].info = el)} className="absolute flex inset-0 justify-end items-end p-12 z-50">
                            <div className="py-2 px-2 bg-white/70 z-40 rounded-2xl shadow-2xl">
                                <div className="p-4 mx-auto flex flex-col">
                                    <span className="text-[18px] leading-5">{product.name.toUpperCase()}</span>
                                    <span className="text-[20px] leading-8">€{formatPrice(product.price)}</span>
                                    <div className="flex justify-end">
                                        <div className="flex justify-center text-center items-center p-3 bg-black rounded-xl cursor-pointer">
                                            <a href={`products/${product.id}`} className="cursor-pointer text-white">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={el => refs.current[i] && (refs.current[i].bg = el)} className="w-full h-full rounded-2xl">
                            <img src={product.image} className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-300 ease-in-out zoom" alt="" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
