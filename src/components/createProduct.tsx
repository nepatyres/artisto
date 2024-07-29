import { useState, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ImgInput from './imgInput';

export default function CreateProduct({ setCreate }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const router = useRouter();

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
            await axios.post('/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setCreate(false);
        } catch (error) {
            console.error('There was an error creating the product:', error);
        }
    };

    const closeBtn = () => {
        setCreate(false);
    }

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
                        <span className='text-2xl'>Create new product</span>
                        <div className='flex flex-col gap-5 pt-8 text-lg'>
                            <input className='border rounded-md px-2 py-3' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Product title' required />
                            <textarea className='border rounded-md px-2 py-1' placeholder='Product description' id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            <input className='border rounded-md px-2 py-3' type="number" step="0.01" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Product price' required />
                            <input className='border rounded-md px-2 py-3' type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} placeholder='Product stock' required />
                            <ImgInput images={images} setImages={setImages} setImagePreviews={setImagePreviews} />
                        </div>
                        <button className='absolute bottom-5 right-5 px-3 py-2 rounded-full bg-green-300' type="submit">Create Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};