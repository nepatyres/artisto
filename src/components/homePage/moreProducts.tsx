import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MoreProducts({ product }) {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/moreProducts/get');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="w-full h-auto bg-grey flex items-center mt-12 mb-20">
            <div className="justify-center w-[85%] lg:w-[80%] rounded-lg mx-auto flex flex-col self-center">
                <div className={`flex flex-row ${product === 'related-products' ? 'w-[95%]' : 'w-[80%]'} mb-10 mt-10`}>
                    <span className="text-3xl lg:text-4xl font-lato">{product === 'related-products' ? 'Related products' : 'More products'}</span>
                    <a href="products" className={`bg-black rounded-[6px] relative btn p-0 h-6 px-1 ml-3 self-end flex items-center ${product === 'related-products' ? 'mb-0.5' : 'mb-1'}`}>
                        <span className="relative z-10 span inline-block text-center transition-colors text-white font-lato text-[12px] px-1">PRODUCTS</span>
                    </a>
                </div>
                <div className='gap-6 grid grid-cols-2 xl:grid-cols-4'>
                    {products.map((p: any, i: number) => (
                        <div key={i} className="w-full flex items-center">
                            <a className="flex mx-auto flex-col cursor-pointer" href={`/products/${p.id}`}>
                                <div className="relative w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] xl:w-[250px] xl:h-[250px] 2xl:w-[300px] 2xl:h-[300px] rounded-lg mx-auto transition-transform duration-[1000ms] ease-in-out hover:scale-105">
                                    <div className="absolute inset-0 w-full h-full rounded-lg">
                                        <img src={p.image} className="h-full w-full object-cover object-center rounded-lg" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-col text-start pt-2 pb-3 mx-2">
                                    <span className="text-sm 2xl:text-2xl w-full font- text-black">{p.name} </span>
                                    <span className="font-normal font-lato">€{formatPrice(p.price)} </span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}