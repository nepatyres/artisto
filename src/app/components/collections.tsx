import React from "react";

export default function Collections() {
    return (
        <div className="w-full overflow-hidden bg-black">

            <div className="w-full h-[50vh] xl:h-screen flex mx-auto">
                <div className="w-[80%] h-[90%] m-auto relative">
                    <div className="absolute flex inset-0 justify-end items-end p-12">
                        <div className="py-2 px-2 bg-white/50 z-40 rounded-2xl shadow-2xl">
                            <div className="p-4 mx-auto flex flex-col">
                                <span className="text-[18px] leading-5">WALL DISPLAY FOR LEGO</span>
                                <span className="text-[20px] leading-8">€ 99.99</span>
                                <div className="flex justify-end">
                                    <div className="flex justify-center text-center items-center p-3 bg-black rounded-xl cursor-pointer">
                                        <a href="/ha" className="cursor-pointer text-white">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <img src="products2.png" className="w-full h-full cover center rounded-2xl transition-transform duration-300 ease-in-out zoom" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}