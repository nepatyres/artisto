import React, { useRef } from "react";

export default function ImgInput({ images, setImages, setImagePreviews }) {
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const newImages = Array.from(e.target.files);
            const imageUrls = newImages.map(file => URL.createObjectURL(file));
            setImages(prevImages => [...prevImages, ...newImages]);
            setImagePreviews(prevPreviews => [...prevPreviews, ...imageUrls]);
        }
    };

    const handleCustomButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className='flex flex-col mx-auto'>
            <div className='flex flex-row w-full gap-3'>
                <div className='grid grid-cols-4 gap-3'>
                    {images.map((image, index) => (
                        <div key={index} className='w-[100px] h-[100px] rounded-md'>
                            <img src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} className='w-full h-full object-cover object-center rounded-md' />
                        </div>
                    ))}
                    <input className='hidden' type="file" multiple onChange={handleImageChange} ref={fileInputRef} />
                    <button type="button" onClick={handleCustomButtonClick} className='border rounded-md px-4 py-2 w-[100px] h-[100px] cursor-pointer'>Add images</button>
                </div>
            </div>
        </div>
    );
}
