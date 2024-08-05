import React, { useState } from "react";
import ImgInput from './imgInput';
import axios from "axios";

interface props {
    setPopup: (value: boolean) => void;
}

export default function PostForm({ setPopup }: props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);

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
            await axios.post('/api/products/post', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            location.reload();
            setPopup(false);
        } catch (error) {
            console.error('There was an error creating the product:', error);
        }
    };


    return (
        <form onSubmit={handleSubmit} className='w-[80%] flex flex-col pt-5'>
            <span className='text-2xl'>Add product</span>
            <div className='flex flex-col gap-3 pt-4'>
                <div className="flex flex-col">
                    <label className="text-black/60 mb ml-1" htmlFor="name">Product title</label>
                    <input className='border rounded-md px-2 py-1.5' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Title' required />
                </div>
                <div className="flex flex-col">
                    <label className="text-black/60 mb ml-1" htmlFor="description">Product description</label>
                    <textarea className='border rounded-md px-2 py-1 overflow-y-auto max-h-[4.5em]' rows={3} placeholder='Description' id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label className="text-black/60 mb ml-1" htmlFor="price">Product price</label>
                    <input className='border rounded-md px-2 py-1.5' type="number" step="0.01" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price' required />
                </div>
                <div className="flex flex-col">
                    <label className="text-black/60 mb ml-1" htmlFor="stock">Product stock</label>
                    <input className='border rounded-md px-2 py-1.5' type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} placeholder='Stock' required />
                </div>
                <ImgInput images={images} setImages={setImages} imagePreviews={imagePreviews} setImagePreviews={setImagePreviews} />
            </div>
            <button className='absolute bottom-5 right-5 px-3 py-2 rounded-full text-white/90 bg-green-300' type="submit">Create</button>
        </form>
    )
}