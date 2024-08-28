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
        <div className="w-auto h-auto bg-grey flex flex-col items-center justify-center mt-12 mb-20">
            <div className="justify-center w-full">
                <div className={`flex ${product === 'related-products' ? 'w-[95%]' : 'w-[80%]'} mx-auto mb-10 mt-10`}>
                    <span className="text-4xl font-light">{product === 'related-products' ? 'Related products' : 'More products'}</span>
                </div>
                <div className={`flex overflow-x-auto mx-auto w-full ${products.length <= 4 ? 'w-full 2xl:w-[80%] 2xl-justify-center' : ''}`}>
                    <div className='flex flex-row gap-6'>
                        {products.map((p: any, i: number) => (
                            i <= 4 && 
                            <div key={i} className="w-full flex items-center">
                                <a className="flex mx-auto flex-col cursor-pointer" href={`/products/${p.id}`}>
                                    <div className={`w-[360px] h-[360px] rounded-lg mx-auto`}>
                                        <img src={p.image} className="h-full w-full object-cover object-center rounded-lg" alt="" />
                                    </div>
                                    <div className="flex flex-col text-start pt-2 pb-3 mx-2">
                                        <span className="text-sm 2xl:text-xl font-light w-full">{p.name}</span>
                                        <span className="font-normal">€{formatPrice(p.price)}</span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}