import CartBtn from "@/components/cart/cartBtn";
import React, { useEffect } from "react";
export default function MainProduct({ screenImg, product, img, cartBtn }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
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

    return (
        <div className="flex flex-wrap flex-col lg:flex-row w-[95%] h-min-screen lg:h-auto lg:w-full mx-auto">
            <div className="w-full flex flex-col lg:flex-row lg:h-full lg:w-[55%] xl:w-[65%] mx-auto lg:border-r lg:border-top-black justify-center">
                <div className="flex-col gap-3 justify-start sticky lg:h-screen top-0 pt-20 pr-1 hidden lg:flex">
                    {product.images.map((image, i) => (
                        <img key={i} src={image} className="w-[100px] h-[80px] cursor-pointer rounded-sm object-center" onClick={() => selectImg(i)} alt="" />
                    ))}
                </div>
                <div className="flex flex-row text-black/70 pb-3 pt-20 w-full gap-1 lg:hidden">
                    <a href="/products" className="hover:text-black text-black/80">products</a>
                    <span>/</span>
                    <span>{product.name}</span>
                </div>
                <div className="w-full flex-col flex mx-auto xl:mx-0 gap-1 lg:pt-20 lg:hidden">
                    <img src={product.images[0]} className="w-full h-full object-center" />
                </div>
                <div className="w-full flex-col lg:h-[80%] 2xl:h-full mx-auto xl:mx-0 gap-1 pt-20 hidden lg:flex">
                    {product.images.map((img, i) => (
                        <img id={`image-${i}`} src={img} key={i} className="w-full h-full object-center" />
                    ))}
                </div>
            </div>
            <div className="w-full lg:h-screen lg:w-[45%] xl:w-[35%] lg:pl-8 xl:pl-12 flex flex-col sticky top-0 pt-10 lg:pt-28">
                <div className="flex-row text-black/70 pb-6 w-full gap-1 hidden xl:flex">
                    <a href="/products" className="hover:text-black text-black/80">products</a>
                    <span>/</span>
                    <span>{product.name}</span>
                </div>
                <span className="text-3xl 2xl:text-5xl">{product.name}</span>
                <span className="text-3xl text-black/70 pt-1 lg:pt-3">€{formatPrice(product.price)}</span>
                <div className="flex flex-col w-[90%] gap-3 lg:mt-auto pb-12 pt-12 lg:pt-0 mx-auto lg:mx-0">
                    <button className="w-full rounded-md px-2 py-2 text-md btn relative text-center cursor-pointer bg-gray-200">
                        <span className="relative z-10 text-md span inline-block text-center transition-colors">BUY NOW</span>
                    </button>
                    <CartBtn product={product} cartBtn={cartBtn} />
                </div>
            </div>
        </div>
    )
}