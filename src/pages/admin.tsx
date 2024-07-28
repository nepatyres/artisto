import React, { useState, useEffect } from "react";
import axios from "axios";
import '../app/globals.css';
import CreateProduct from "@/components/create";

interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    images?: string[];
    stock?: string;
}

export default function Admin() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [password, setPassword] = useState('');
    const [create, setCreate] = useState<boolean>(false);

    const passCheck = () => {
        if (password === 'a') {
            setIsLogged(true);
        }
    }

    const createBtn = () => {
        setCreate(true);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/admin');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`/api/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error('Failed to delete product', error);
        }
    };

    return (
        <div className="overflow-hidden w-full min-h-screen">
            <div className="grid grid-cols-4 h-auto w-[80%] mx-auto">
                <button className="fixed top-3 right-8 px-3 py-2 rounded-full bg-green-300" onClick={createBtn}>Add product</button>
                {products.map((product, i) => (
                    <div key={product.id} className="flex flex-row mt-5 ml-5 h-[200px] w-[200px] shadow-lg rounded-lg">
                        <div className="flex w-full h-full">
                            <div className="flex flex-col relative w-full h-full">
                                <div className="top-0 left-0 w-full h-[70%]">
                                    {product.images && product.images.length > 0 ? (
                                        <img
                                            className="w-full h-full object-cover object-center rounded-lg"
                                            src={product.images[0]}
                                            alt="Product Image"
                                        />
                                    ) : (
                                        <div className="flex justify-center items-center text-gray-500">
                                            No image available
                                        </div>
                                    )}
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-center font-semibold">{product.name}</div>
                                    <div className="flex justify-center text-sm text-gray-600">Left: {product.stock}</div>
                                    <div className="flex justify-center text-sm text-gray-600">ID: {product.id}</div>
                                    {/* <button onClick={() => handleDelete(product.id)}>delete</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {create && <CreateProduct setCreate={setCreate} />}
        </div>
    )
}
