import CartBtn from "@/components/cart/cartBtn";
import { Span } from "next/dist/trace";
import React, { useState } from "react";
import ProductAccordion from "./accordion";
import CheckoutBtn from "../cart/checkoutBtn";
export default function MainProduct({ screenImg, product, img, cartBtn }: any) {
    const [num, setNum] = useState(0);
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(price);
    };

    const selectImg = (index: number) => {
        const largeImage = document.getElementById(`image-${index}`);

        if (largeImage) {
            largeImage.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    const nextImageBtn = () => {
        if (product.images.length - 1 >= num + 1) {
            setNum(num + 1);
        } else {
            setNum(0);
        }
    }

    const prevImageBtn = () => {
        if (num - 1 >= 0) {
            setNum(num - 1);
        } else {
            setNum(product.images.length - 1);
        }
    }

    return (
        <div className="flex flex-wrap flex-col lg:flex-row w-[95%] h-min-screen lg:h-auto lg:w-full mx-auto">
            <div className="w-full flex flex-col lg:flex-row lg:h-full lg:w-[55%] xl:w-[65%] mx-auto lg:border-r lg:border-top-black justify-center ">
                <div className="flex-col gap-3 justify-start sticky lg:h-screen top-0 pt-20 pr-1 hidden lg:flex">
                    {product.images.map((image: string, i: number) => (
                        <img key={i} src={image} className="w-[100px] h-[80px] cursor-pointer rounded-sm object-center" onClick={() => selectImg(i)} alt="" />
                    ))}
                </div>
                <div className="flex flex-row text-black/70 pb-3 pt-24 w-full gap-1 lg:hidden font-panno uppercase">
                    <a href="/products" className="bfooter">products</a>
                    <span>/</span>
                    <a href="" className="bfooter">{product.name}</a>
                </div>
                <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] flex-col flex mx-auto xl:mx-0 gap-1 lg:pt-20 lg:hidden relative">
                    <img src={product.images[num]} className="w-full h-full object-center rounded-md select-none" />
                    <div className="absolute flex z-10 h-full justify-self-start items-center cursor-pointer" onClick={prevImageBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 fill-current text-white z-20 stroke-[.1px] stroke-bdot9" viewBox="0 0 24 24" >
                            <path xmlns="http://www.w3.org/2000/svg" d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z" />
                        </svg>
                    </div>
                    <div className="absolute flex z-10 h-full justify-self-end self-end items-center cursor-pointer" onClick={nextImageBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 fill-current text-white z-20 stroke-[.1px] stroke-bdot9" viewBox="0 0 24 24" >
                            <path xmlns="http://www.w3.org/2000/svg" d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z"/>
                        </svg>
                    </div>
                </div>
                <div className="w-full flex-col lg:h-[80%] 2xl:h-full mx-auto xl:mx-0 gap-1 pt-20 hidden lg:flex">
                    {product.images.map((img: string, i: number) => (
                        <img id={`image-${i}`} src={img} key={i} className="w-full h-full object-center" />
                    ))}
                </div>
            </div>
            <div className="w-full lg:h-screen lg:w-[45%] xl:w-[30%] flex flex-col sticky top-0 lg:pt-24 lg:pl-6 xl:pl-0 2xl:pl-0">
                <div className="flex-row pb-2 w-full gap-1 hidden xl:flex font-panno uppercase">
                    <a href="/products" className="bfooter">products</a>
                    <span>/</span>
                    <a href="" className="bfooter">{product.name}</a>
                </div>
                <span className="text-3xl 2xl:text-4xl pt-2 font-lato">{product.name}</span>
                <span className="text-2xl text-bdot9 lg:pt-3 pr-4 font-lato">€{formatPrice(product.price)}</span>
                <div className="hidden lg:flex mt-10">
                    <ProductAccordion product={product} />
                </div>
                <div className="flex flex-col w-full lg:w-[90%] lg:mt-auto pt-10 lg:pt-0 mx-auto lg:mx-0">
                    <CheckoutBtn product={product} />
                    <CartBtn product={product} cartBtn={cartBtn} />
                    <span className="my-2 font-lato">In stock. Ships in 14-21 working days. Shipping worldwide.</span>
                </div>
                <div className="flex lg:hidden w-full mt-8">
                    <ProductAccordion product={product} />
                </div>
            </div>
        </div>
    )
}