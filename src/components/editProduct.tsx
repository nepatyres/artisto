import React, { useState } from "react"
import ImgInput from "./imgInput";

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

    const closeBtn = () => {
        setEdit(false);
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
                    <form className='w-[80%] flex flex-col pt-5'>
                        <span className='text-2xl'>Edit product</span>
                        <div className='flex flex-col gap-5 pt-8'>
                            <input className='border rounded-md px-2 py-3' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Product title' required />
                            <textarea className='border rounded-md px-2 py-1' placeholder='Product description' id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            <input className='border rounded-md px-2 py-3' type="number" step="0.01" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Product price' required />
                            <input className='border rounded-md px-2 py-3' type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} placeholder='Product stock' required />
                            <ImgInput images={images} setImages={setImages} imagePreviews={imagePreviews} setImagePreviews={setImagePreviews} />
                        </div>
                        <button className='absolute bottom-5 right-5 px-3 py-2 rounded-full bg-green-300' type="submit">Update product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}