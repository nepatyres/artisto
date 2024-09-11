import React, { useRef } from "react";
import Image from 'next/image';
export default function ImgInput({ setImages, imagePreviews, setImagePreviews, existingImages, setDeletedImages }: any) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const newImages = Array.from(e.target.files);
            const imageUrls = newImages.map((file: any) => URL.createObjectURL(file));
            setImages((prevImages: any[]) => [...prevImages, ...newImages]);
            setImagePreviews((prevPreviews: string[]) => [...prevPreviews, ...imageUrls]);
        }
    };

    const handleCustomButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const removeImgBtn = (index: number) => {
        const removedImage = imagePreviews[index];
        if (Array.isArray(existingImages) && existingImages.includes(removedImage)) {
            setDeletedImages((prevDeleted: string[]) => [...prevDeleted, removedImage]);
        }

        setImages((prevImages: any[]) => prevImages.filter((_: any, i: number) => i !== index));
        setImagePreviews((prevPreviews: string[]) => prevPreviews.filter((_: any, i: number) => i !== index));
    };

    return (
        <div className='flex flex-col mx-auto pt-3 select-none'>
            <div className='flex flex-row w-full gap-3'>
                <div className='grid grid-cols-4 gap-3'>
                    {imagePreviews.map((preview: string, i: any) => (
                        <div key={i} className='w-[80px] h-[80px] sm:h-[100px] sm:w-[100px] rounded-md relative'>
                            <svg onClick={() => removeImgBtn(i)}
                                className="mix-blend-difference fill-white shadow-2xl z-50 w-6 h-6 flex cursor-pointer absolute right-0 top-0 rounded-full"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
                                <path className="stroke-black mix-blend-difference stroke-[4]"
                                    d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z"
                                />
                            </svg>
                            <Image  layout="fill" src={preview} alt={`Uploaded ${i}`} className='w-full h-full object-cover object-center rounded-md' />
                        </div>
                    ))}
                    <input className='hidden' type="file" multiple onChange={handleImageChange} ref={fileInputRef} />
                    <button type="button" onClick={handleCustomButtonClick} className={`border rounded-md px-4 py-2 w-[80px] h-[80px] sm:h-[100px] sm:w-[100px] cursor-pointer ${imagePreviews.length > 7 ? 'hidden' : ''}`}>Add images</button>
                </div>
            </div>
        </div>
    );
}

