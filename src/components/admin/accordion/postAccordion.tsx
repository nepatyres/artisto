import React, { useState, useEffect } from "react"
import axios from "axios";
import Image from 'next/image';
export default function PostAccordion({ setPopup, products, form }: any) {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [bestseller, setBestseller] = useState([]);
    const [moreProducts, setMoreProducts] = useState([]);

    useEffect(() => {
        const fetchMoreProducts = async () => {
            const response = await axios.get('/api/moreProducts/get');
            setMoreProducts(response.data);
        };
        fetchMoreProducts();
    }, []);

    useEffect(() => {
        const fetchBestseller = async () => {
            const response = await axios.get('/api/bestseller/get');
            setBestseller(response.data);
        };
        fetchBestseller();
    }, []);

    const updateBtn = (id: number, name: string, price: number, image: string) => {
        setId(id);
        setName(name);
        setPrice(price);
        setImage(image);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const productData = { id, name, price, image };

        if (form === 'GETBESTSELLER') {
            try {
                await axios.post("/api/bestseller/post", productData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                location.reload();
            } catch (error) {
                console.error("There was an error creating the bestseller:", error);
            }
        } else if (form === 'GETMOREPRODUCTS') {
            try {
                await axios.post("/api/moreProducts/post", productData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                location.reload();
            } catch (error) {
                console.error("There was an error creating the more products:", error);
            }
        }
    };

    const filteredProducts = products.filter((product: any) => {
        if (form === "GETBESTSELLER") {
            return !bestseller.some((best: any) => best.id === product.id);
        } else if (form === "GETMOREPRODUCTS") {
            return !moreProducts.some((more: any) => more.id === product.id);
        }
        return true;
    });


    return (
        <form onSubmit={handleSubmit} className="w-[80%] flex flex-col pt-5">
            <span className="text-2xl">{form === 'GETBESTSELLER' ? 'Choose bestseller' : form === 'GETMOREPRODUCTS' ? 'Choose more product' : ''}</span>
            {products.length === 0 && <span className="text-xl pt-16 text-black/70">Add product first</span>}
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-8 pt-8'>
                {products && filteredProducts.map((product: any, i: number) => (
                    <button key={i} className='w-[100px] h-[100px] rounded-md relative cursor-pointer' onClick={() => updateBtn(product.id, product.name, product.price, product.images[0])}>

                        <Image layout="fill" src={product.images[0]} alt={`Uploaded ${i}`} className='object-cover object-center rounded-md' />
                        <span>{product.name.slice(0, 7)}...</span>
                    </button>
                ))}
            </div>
        </form>
    )
}