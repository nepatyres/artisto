import React, { useState, useEffect } from "react";
import axios from "axios";
import '../app/globals.css';
import CreateProduct from "@/components/createProduct";
import EditProduct from "@/components/editProduct";

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
    const [edit, setEdit] = useState<boolean>(false);
    const [product, setProduct] = useState<string>('');

    const passCheck = () => {
        if (password === 'a') {
            setIsLogged(true);
        }
    }

    const createBtn = () => {
        setCreate(true);
    }

    const editBtn = (product) => {
        setEdit(true);
        setProduct(product);
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
        <div className="flex flex-col relative overflow-hidden min-h-screen w-[80%] mx-auto">
            <button className="self-end w-32 my-3 px-3 py-2 rounded-full bg-green-300" onClick={createBtn}>Add product</button>
            <div className="grid grid-cols-5 h-auto w-full mx-auto">
                {products.map((product, i) => (
                    <div key={product.id} onClick={() => editBtn(product)} className="flex flex-row mt-5 ml-5 h-[250px] w-[200px] shadow-lg rounded-lg cursor-pointer">
                        <div className="flex w-full h-full">
                            <div className="flex flex-col relative w-full h-full">
                                <div className="top-0 left-0 w-full h-[70%]">
                                    {product.images && product.images.length > 0 ? (
                                        <img className="w-full h-full object-cover object-center rounded-lg" src={product.images[0]} />
                                    ) : (
                                        <div className="flex justify-center items-center text-gray-500">
                                            No image available
                                        </div>
                                    )}
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-center font-semibold">{product.name}</div>
                                    <div className="flex justify-center text-sm text-gray-600">Left: {product.stock}</div>
                                    {/* <button onClick={() => handleDelete(product.id)}>delete</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {create && <CreateProduct setCreate={setCreate} />}
            {edit && <EditProduct setEdit={setEdit} product={product} />}
        </div>
    )
}
