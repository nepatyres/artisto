import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function CreateProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [images, setImages] = useState([]);
    const router = useRouter();

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const newImages = [...images, ...Array.from(e.target.files).map(file => URL.createObjectURL(file))];
            setImages(newImages);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('stock', stock);
        if (image) {
            formData.append('image', image);
        }

        try {
            await axios.post('/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            //   router.push('/products'); // Redirect to the products list page after creation
        } catch (error) {
            console.error('There was an error creating the product:', error);
        }
    };

    return (
        <div className='h-screen absolute overflow-hidden m-0 z-20'>
            <div className='flex fixed w-full h-screen backdrop-blur-sm top-0 left-0 justify-center items-center z-10 transition-opacity-transform duration-1000 ease-in-out transform'>
                <div className='flex justify-center w-[600px] h-[700px] shadow-md rounded-lg'>
                    <form onSubmit={handleSubmit}>
                        <span className='py-8 text-2xl'>Create new product</span>
                        <div className='flex flex-col gap-3'>
                            {/* <label htmlFor="name">Title:</label> */}
                            <input className='border rounded-md px-2 py-1' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Product title' required />
                            <textarea className='border rounded-md px-2 py-1' placeholder='Product description'
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input className='border rounded-md px-2 py-1'
                                type="number"
                                step="0.01"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder='Product price'
                                required
                            />
                            <input className='border rounded-md px-2 py-1'
                                type="number"
                                id="stock"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                placeholder='Product stock'
                                required
                            />
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginRight: '20px' }}>
                                    {images.map((image, index) => (
                                        <div key={index} style={{ marginBottom: '10px' }}>
                                            <img src={image} alt={`Uploaded ${index}`} width="100" />
                                        </div>
                                    ))}
                                </div>
                                <input
                                    className=''
                                    type="file"
                                    id="image"
                                    onChange={(e) => { if (e.target.files && e.target.files.length > 0) { setImage(e.target.files[0]); } }}
                                />
                            </div>
                        </div>
                        {/* <div>
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div> */}
                        {/* <div>
                            <label htmlFor="price">Price:</label>
                            <input
                                type="number"
                                step="0.01"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div> */}
                        {/* <div>
                            <label htmlFor="stock">Stock:</label>
                            <input
                                type="number"
                                id="stock"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                required
                            />
                        </div> */}
                        {/* <div>
                            <label htmlFor="image">Image:</label>
                            <input
                                type="file"
                                id="image"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        setImage(e.target.files[0]);
                                    }
                                }}
                            />
                        </div> */}
                        <button type="submit">Create Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};