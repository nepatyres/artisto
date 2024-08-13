'use client';
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import '../../app/globals.css'
import axios from "axios";
import { useRouter } from 'next/router';

export default function ProductPage() {
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [img, setImg] = useState<string | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get('/api/products/get');
                const productData = response.data.find((data: any) => data.id === parseInt(id));
                setProduct(productData);
                if (productData && productData.images) {
                    setImg(productData.images[0]);
                }
                setLoading(false);
            } catch (err) {
                setError("Failed to load product data");
                setLoading(false);
            }
        };
        if (id) {
            fetchProduct();
        }
    }, [id]);
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    const selectImg = (i) => {
        setImg(product.images[i])
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="min-h-screen flex">
            <Navbar />
            <div className="flex mt-20 w-[95%] md:w-[80%] lg:w-[80%] mx-auto flex-col mb-40">
                <div className="flex flex-col lg:flex-row w-full h-full mt-10">
                    <div className="w-full lg:w-[80%] mx-auto">
                        <div className="w-[450px] md:w-[500px] md:h-[500px] lg:w-[90%] h-[450px] lg:h-[650px] flex mx-auto lg:mx-0">
                            <img src={img} className="w-full h-full object-center rounded-lg overflow-hidden" alt={product.name} />
                        </div>
                        <div className="flex flex-row w-full gap-3 mt-5 justify-center lg:justify-start">
                            {product.images.map((image, i) => (
                               i < 4 && <img key={i} src={image} className="w-[80px] lg:w-[110px] h-[80px] lg:h-[110px] cursor-pointer rounded-lg object-center" onClick={() => selectImg(i)} alt="" />
                            ))}
                        </div>
                    </div>
                    <div className="w-full xl:w-[30%] lg:pl-12 pt-12 flex flex-col">
                        <span className="text-3xl">{product.name}</span>
                        <span className="text-3xl text-black/70">€{formatPrice(product.price)}</span>
                        <div className="flex flex-col lg:flex-row w-[90%] lg:w-full gap-3 pt-16 mx-auto">
                            <button className="w-full border border-black rounded-full px-4 py-2 text-xl">Buy now</button>
                            <button className="w-full border border-black rounded-full px-4 py-2 text-xl">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
