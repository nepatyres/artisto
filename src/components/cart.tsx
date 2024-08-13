import React from "react"
export default function Cart({ cartBtn }) {
    return (
        <div className='fixed flex top-0 left-0 w-screen h-screen z-[50] backdrop-brightness-75 select-none justify-end'>
            <div className="w-[80%] 2xl:w-[30%] h-full right-0 bg-white">
                <div className="flex flex-col w-full h-full">
                    <div className="flex flex-row w-full justify-between items-center mx-auto px-6 mt-3">
                        <span className="text-3xl">Cart</span>
                        <svg onClick={cartBtn}
                            className="fill-black h-11 w-11 flex cursor-pointer rounded-full"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
                            <path
                                d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}