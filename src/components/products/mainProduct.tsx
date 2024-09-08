import CartBtn from "@/components/cart/cartBtn";
import { Span } from "next/dist/trace";
import React, { useState } from "react";
import ProductAccordion from "./accordion";
export default function MainProduct({ screenImg, product, img, cartBtn }) {
    const [num, setNum] = useState(0);
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(price);
    };

    const selectImg = (index) => {
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
            setNum(product.images.length -1);
        }
    }

    return (
        <div className="flex flex-wrap flex-col lg:flex-row w-[95%] h-min-screen lg:h-auto lg:w-full mx-auto">
            <div className="w-full flex flex-col lg:flex-row lg:h-full lg:w-[55%] xl:w-[65%] mx-auto lg:border-r lg:border-top-black justify-center ">
                <div className="flex-col gap-3 justify-start sticky lg:h-screen top-0 pt-20 pr-1 hidden lg:flex">
                    {product.images.map((image, i) => (
                        <img key={i} src={image} className="w-[100px] h-[80px] cursor-pointer rounded-sm object-center" onClick={() => selectImg(i)} alt="" />
                    ))}
                </div>
                <div className="flex flex-row text-black/70 pb-3 pt-24 w-full gap-1 lg:hidden font-panno uppercase">
                    <a href="/products" className="bfooter">products</a>
                    <span>/</span>
                    <a href="" className="bfooter">{product.name}</a>
                </div>
                <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] flex-col flex mx-auto xl:mx-0 gap-1 lg:pt-20 lg:hidden relative">
                    <img src={product.images[num]} className="w-full h-full object-center rounded-md" />
                    <div className="absolute flex z-10 w-20 h-full justify-self-start items-center cursor-pointer" onClick={prevImageBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 fill-current text-white z-20 stroke-[.01px] stroke-bdot9" viewBox="0 0 24 24" >
                            <path xmlns="http://www.w3.org/2000/svg" d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" />
                        </svg>
                    </div>
                    <div className="absolute flex z-10 w-20 h-full justify-self-end self-end items-center cursor-pointer" onClick={nextImageBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 fill-current text-white z-20 stroke-[.01px] stroke-bdot9" viewBox="0 0 24 24" >
                            <path xmlns="http://www.w3.org/2000/svg" d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" />
                        </svg>
                    </div>
                </div>
                <div className="w-full flex-col lg:h-[80%] 2xl:h-full mx-auto xl:mx-0 gap-1 pt-20 hidden lg:flex">
                    {product.images.map((img, i) => (
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
                    <ProductAccordion />
                </div>
                <div className="flex flex-col w-full lg:w-[90%] lg:mt-auto pt-10 lg:pt-0 mx-auto lg:mx-0">
                    <button className="w-full rounded-md px-2 py-2 text-md btn relative text-center cursor-pointer mb-3 bg-gray-200">
                        <span className="relative z-10 text-md span inline-block text-center transition-colors">BUY NOW</span>
                    </button>
                    <CartBtn product={product} cartBtn={cartBtn} />
                    <span className="my-2 font-lato">In stock. Ships in 14-21 working days. Shipping worldwide.</span>
                </div>
                <div className="flex lg:hidden w-full mt-8">
                    <ProductAccordion />
                </div>
            </div>
        </div>
    )
}