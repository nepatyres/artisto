'use client';
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import '../../app/globals.css'
import axios from "axios";
import { useRouter } from 'next/router';
import MainProduct from "@/components/products/mainProduct";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/preloader";
import MoreProducts from "@/components/homePage/moreProducts";
import Footer from "@/components/footer";

export default function ProductPage() {
    const [product, setProduct] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [img, setImg] = useState<string | null>(null);
    const router = useRouter();
    const { id } = router.query;
    const [cart, setCart] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get('/api/products/get');
                const productData = response.data.find((data: any) => data.id === parseInt(id));
                setProduct(productData);
                if (productData && productData.images) {
                    setImg(productData.images[0]);
                }
                setIsLoading(false);

                // Refresh locomotive-scroll after content is loaded
                const LocomotiveScroll = (await import('locomotive-scroll')).default;
                const locomotiveScroll = new LocomotiveScroll();
                locomotiveScroll.update(); // Refresh the scroll instance
            } catch (err) {
                setError("Failed to load product data");
                setIsLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);


    const cartBtn = () => {
        setCart(!cart);
    };

    const screenImg = (i) => {
        screenImg(product.images[i])
    }

    return (
        <div className="h-screen flex flex-col">
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Navbar cartBtn={cartBtn} cart={cart} />
            <>
                {product ? (
                    <>
                        <MainProduct screenImg={screenImg} product={product} img={img} cartBtn={cartBtn} />
                        <MoreProducts product='related-products' />
                    </>
                ) : error ? (
                    <div className="text-center text-red-500 mt-10">Error: {error}</div>
                ) : (
                    <div className="text-center mt-10">Loading...</div>
                )}
                <Footer />
            </>
        </div>
    )

}
