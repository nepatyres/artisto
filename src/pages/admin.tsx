import React, { useState, useEffect } from "react";
import axios from "axios";
import '../app/globals.css';
import ProductPopup from "@/components/admin/productPopup/productPopup";
import Product from "@/components/admin/productPopup/product";
import Accordion from "@/components/admin/accordion/accordion";

export default function Admin() {
    const [products, setProducts] = useState<any>([]);
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [password, setPassword] = useState('');
    const [popup, setPopup] = useState<boolean>(false);
    const [form, setForm] = useState<string>('');
    const [product, setProduct] = useState<any>();

    const passCheck = () => {
        if (password === 'a') {
            setIsLogged(true);
        }
    }

    const popupBtn = (product: any, form: string) => {
        setPopup(true);
        setProduct(product);
        setForm(form);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products/get');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);


    return (
        <div className="flex flex-col relative overflow-hidden min-h-screen w-[95%] md:w-[80%] mx-auto">
            <div className="w-full h-full flex flex-row justify-between">
                <a href="/" className="text-lg w-32 my-3 px-3 py-2 rounded-full border border-black text-center">Home</a>
                <button className="self-end text-lg w-32 my-3 px-3 py-2 rounded-full text-white bg-green-300" onClick={() => popupBtn(product, 'POST')}>Add product</button>
            </div>
            <Accordion popupBtn={popupBtn} product={product} />
            <Product setProducts={setProducts} products={products} popupBtn={popupBtn} />
            {popup && <ProductPopup setPopup={setPopup} product={product} products={products} form={form} />}
        </div>
    )
}
