'use client';
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import '../../app/globals.css'
import axios from "axios";
import { useRouter } from 'next/router';
import MainProduct from "@/components/products/mainProduct";

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

    // const selectImg = (i) => {
    //     setImg(product.images[i])
    // }

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
        <div className="h-screen flex flex-col">
            <Navbar />
            <MainProduct product={product} img={img}/>
        </div>
    )
}
