import React, { useState } from "react"
import axios from "axios";
export default function PostBestseller({ setPopup, products }) {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');


    const bestsellerBtn = (id, name, price, image) => {
        setId(id);
        setName(name);
        setPrice(price);
        setImage(image);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = { id, name, price, image };

        try {
            await axios.post("/api/bestseller/post", productData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            location.reload();
        } catch (error) {
            console.error("There was an error creating the product:", error);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="w-[80%] flex flex-col pt-5">
            <span className="text-2xl">Choose bestseller</span>
            {products.length === 0 && <span className="text-xl pt-16 text-black/70">Add product first</span>}
            <div className='grid grid-cols-4 gap-3 pt-8'>
                {products && products.map((product, i) => (
                    <button key={i} className='w-[100px] h-[120px] rounded-md relative cursor-pointer' onClick={() => bestsellerBtn(product.id, product.name, product.price, product.images[0])}>
                        <div className="w-full h-full flex flex-col">
                            <img src={product.images[0]} alt={`Uploaded ${i}`} className='w-full h-full object-cover object-center rounded-md' />
                            <span>{product.name.slice(0, 7)}...</span>
                        </div>
                    </button>
                ))}
            </div>
        </form>
    )
}