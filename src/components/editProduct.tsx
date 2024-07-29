import React, { useState } from "react"
import ImgInput from "./imgInput";
import axios from "axios";

interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    images?: string[];
    stock?: string;
}
export default function EditProduct({ setEdit, product }) {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [stock, setStock] = useState(product.stock);
    const [images, setImages] = useState(product.images || []);
    const [imagePreviews, setImagePreviews] = useState(product.images || []);
    const [products, setProducts] = useState<string>('');

    const closeBtn = () => {
        setEdit(false);
    }

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`/api/${id}`);
            setProducts(products.filter(products => product.id !== id));
        } catch (error) {
            console.error('Failed to delete product', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('stock', stock);
        images.forEach((img) => {
            formData.append('images', img);
        });

        try {
            await axios.put(`/api/${product.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setEdit(false);
        } catch (error) {
            console.error('There was an error updating the product:', error);
        }
    };

    return (
        <div className='h-screen absolute overflow-hidden m-0 z-20'>
            <div className='flex fixed w-full h-screen backdrop-blur-md top-0 left-0 justify-center items-center z-10 transition-opacity-transform duration-1000 ease-in-out transform'>
                <div className='flex relative justify-center bg-white w-[600px] h-[700px] shadow-md rounded-lg'>
                    <svg onClick={closeBtn}
                        className="fill-zinc-400 h-11 w-11 flex cursor-pointer absolute right-0 top-0 mr-3 mt-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
                        <path
                            d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z" />
                    </svg>
                    <form onSubmit={handleSubmit} className='w-[80%] flex flex-col pt-5'>
                        <span className='text-2xl'>Edit product</span>
                        <div className='flex flex-col gap-3 pt-4'>
                            <div className="flex flex-col">
                                <label className="text-black/40 mb ml-1" htmlFor="name">Product title</label>
                                <input className='border rounded-md px-2 py-1.5' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Product title' required />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-black/40 mb ml-1" htmlFor="description">Product description</label>
                                <textarea className='border rounded-md px-2 py-1 overflow-hidden max-h-[4.5em]' rows={3} placeholder='Product description' id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-black/40 mb ml-1" htmlFor="price">Product price</label>
                                <input className='border rounded-md px-2 py-1.5' type="number" step="0.01" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Product price' required />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-black/40 mb ml-1" htmlFor="stock">Product stock</label>
                                <input className='border rounded-md px-2 py-1.5' type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} placeholder='Product stock' required />
                            </div>
                            <ImgInput images={images} setImages={setImages} imagePreviews={imagePreviews} setImagePreviews={setImagePreviews} />
                        </div>
                        <button className="absolute bottom-5 right-[85px] px-3 py-2 rounded-full text-white/90 bg-red-300" onClick={() => handleDelete(product.id)}>Delete</button>
                        <button className='absolute bottom-5 right-5 px-3 py-2 rounded-full text-white/90 bg-green-300' type="submit">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}