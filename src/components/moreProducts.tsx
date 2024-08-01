import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MoreProducts() {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products/get');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div className="w-full h-screen bg-grey flex flex-col">
            <span>More products</span>
            <div className="flex flex-row w-[85%] h-full mx-auto items-center justify-center">
                {products.filter(product => product.display).map((product: any, i: number) => (
                    i <= 4 && <div key={i} className="w-full flex space-between justify-center items-center">
                        <div className="flex mx-auto flex-col cursor-pointer">
                            <div className="lg:w-[350px] lg:h-[370px] w-[280px] h-[300px] rounded-lg mx-auto">
                                <img src={product.images[0]} className="h-full w-full object-cover object-center rounded-lg" alt="" />
                            </div>
                            <div className="flex flex-col text-center pt-2 pb-3">
                                <span className="text-sm 2xl:text-md w-[70%] mx-auto">{product.name}</span>
                                <span>€{product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}