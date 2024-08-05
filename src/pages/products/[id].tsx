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
                    setImg(productData.images[0]); // Set the initial image after fetching the product
                }
                setLoading(false);
            } catch (err) {
                setError("Failed to load product data");
                setLoading(false);
            }
        };

        if (id) { // Ensure that the ID is available
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
        <div className="min-h-screen w-screen flex overflow-hidden">
            <Navbar />
            <div className="flex mt-20 w-[80%] mx-auto flex-row">
                <div className="w-[65%] h-full mt-20">
                    <div className="w-full rounded-lg mx-auto">
                        <img src={img} className="w-full object-cover object-center rounded-lg" alt={product.name} />
                        <div className="flex flex-row w-full gap-3 mt-5">
                            {product.images.map((image, i) => (
                                <img key={i} src={image} className="w-[150px] h-[150px] cursor-pointer rounded-lg" onClick={() => selectImg(i)} alt="" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-[35%] h-full">

                </div>
            </div>
        </div>
    )
}
