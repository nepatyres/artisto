import React, { useState } from "react";
import ImgInput from "./imgInput";
import axios from "axios";

interface props {
    setPopup: (value: boolean) => void;
    product: any;
}

export default function PutForm({ setPopup, product }: props) {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [stock, setStock] = useState(product.stock);
    const [images, setImages] = useState(product.images || []);
    const [imagePreviews, setImagePreviews] = useState(product.images || []);
    const [products, setProducts] = useState<any>('');

    const closeBtn = () => {
        setPopup(false);
    }

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`/api/products/${id}`);
            setProducts(products.filter((product: any) => product.id !== id));
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
        images.forEach((img: any) => {
            formData.append('images', img);
        });

        try {
            await axios.put(`/api/products/${product.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            location.reload();
            setPopup(false);
        } catch (error) {
            console.error('There was an error updating the product:', error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className='w-[80%] flex flex-col pt-5'>
            <span className='text-2xl'>Edit product</span>
            <div className='flex flex-col gap-3 pt-4'>
                <div className="flex flex-col">
                    <label className="text-black/60 mb ml-1" htmlFor="name">Product title</label>
                    <input className='border rounded-md px-2 py-1.5' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Title' required />
                </div>
                <div className="flex flex-col">
                    <label className="text-black/60 mb ml-1" htmlFor="description">Product description</label>
                    <textarea className='border rounded-md px-2 py-1 overflow-hidden max-h-[4.5em]' rows={3} placeholder='Description' id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label className="text-black/60 mb ml-1" htmlFor="price">Product price</label>
                    <input className='border rounded-md px-2 py-1.5' type="number" step="0.01" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price' required />
                </div>
                <div className="flex flex-col">
                    <label className="text-black/60 mb ml-1" htmlFor="stock">Product stock</label>
                    <input className='border rounded-md px-2 py-1.5' type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} placeholder='Stock' required />
                </div>
                <ImgInput setImages={setImages} imagePreviews={imagePreviews} setImagePreviews={setImagePreviews} />
            </div>
            <button className="absolute bottom-5 right-[85px] px-3 py-2 rounded-full text-white/90 bg-red-300" onClick={() => handleDelete(product.id)}>Delete</button>
            <button className='absolute bottom-5 right-5 px-3 py-2 rounded-full text-white/90 bg-green-300' type="submit">Save</button>
        </form>
    )
}