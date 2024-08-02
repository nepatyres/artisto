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
    const router = useRouter();
    const { id } = router.query;  // Extract the product ID from the URL

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get('/api/products/get');
                const productData = response.data.find((data: any) => data.id === parseInt(id));
                setProduct(productData);
                setLoading(false);
            } catch (err) {
                setError("Failed to load product data");
                setLoading(false);
            }
        };

        if (id) { // Ensure that the ID is available
            fetchProduct();
        }
    }, [id]);  // Re-run effect when ID changes

    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

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
        <div className="min-h-screen w-full flex">
            <Navbar />
            <div className="flex-1 flex">
                <div className="">
                    <div className="w-[600px] h-[400px] rounded-lg mx-auto">
                        <img src={product.images[0]} className="h-full w-full object-cover object-center rounded-lg" alt={product.name} />
                    </div>
                </div>
            </div>
        </div>
    )
}
