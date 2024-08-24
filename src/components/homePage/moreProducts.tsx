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
        <div className="w-full h-auto bg-grey flex flex-col items-center justify-center mt-12">
            <div className="justify-center w-full">
                <div className={`flex ${product === 'related-products' ? 'w-[95%]' :'w-[80%]'} mx-auto mb-10 mt-10`}>
                    <span className="text-5xl">{product === 'related-products' ? 'Related products' : 'More products'}</span>
                </div>
                <div className="flex flex-col w-full items-center justify-center">
                    <div className={`grid grid-cols-2 lg:grid-cols-4 ${product === 'related-products' ? 'w-[95%]' :' w-[85%] 2xl:w-[82.5%]'} items-start justify-center`}>
                        {products.map((product: any, i: number) => (
                            i <= 4 && <div key={i} className="w-full flex items-center">
                                <a className="flex mx-auto flex-col cursor-pointer" href={`/products/${product.id}`}>
                                    <div className=" w-[160px] h-[160px] sm:w-[230px] sm:h-[230px] md:w-[280px] md:h-[280px] lg:w-[200px] lg:h-[200px] xl:w-[260px] xl:h-[260px] 2xl:w-[390px] 2xl:h-[350px] rounded-lg mx-auto">
                                        <img src={product.image} className="h-full w-full object-cover object-center rounded-lg" alt="" />
                                    </div>
                                    <div className="flex flex-col text-center pt-2 pb-3">
                                        <span className="text-sm 2xl:text-md w-[70%] mx-auto">{product.name}</span>
                                        <span>€{formatPrice(product.price)}</span>
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