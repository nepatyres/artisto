import React, { useState, useEffect } from "react";
import axios from "axios";
import '../app/globals.css';
import CreateProduct from "@/components/create";

interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    image?: string;
    stock?: string;
}

export default function Admin() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLogged, setIsLogged] = useState(false);
    const [password, setPassword] = useState('');
    const [create, setCreate] = useState(false);

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
        <div className="overflow-hidden w-full h-min-screen">
            {/* {!isLogged ?
                (<div className="w-full h-screen flex items-center justify-center flex-col">
                    <input type="password" className="border border-black" name="" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={passCheck}>login</button>
                </div>)
                :
                (

                    products.map((product, i) => (
                        <div className="flex flex-col mt-5 ml-5 h-[200px] w-[200px] border border-black rounded-lg">
                            <div className="flex flex-col">
                                <div key={i} className="flex flex-row gap-3">
                                    <div>{product.name}</div>
                                </div>
                            </div>
                        </div>
                    ))
                )
            } */}

            <div className="grid grid-cols-4 w-[80%] mx-auto">
                <button onClick={createBtn}>Create a product</button>
                {/* {create && <CreateProduct />} */}
                {products.map((product, i) => (
                    <div key={product.id} className="flex flex-row mt-5 ml-5 h-[200px] w-[200px] border border-black rounded-lg">
                        <div className="flex">
                            <div className="flex flex-row gap-3">
                                <div>{product.name}</div>
                                <div>{product.stock}</div>
                                <button onClick={() => handleDelete(product.id)}>delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* {create &&  */}
            <CreateProduct />
            {/* } */}
        </div>
    )
}