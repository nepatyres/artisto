import React, { useRef } from "react";

interface props {
    setImages: any,
    imagePreviews: any,
    setImagePreviews: any
}

export default function ImgInput({ setImages, imagePreviews, setImagePreviews }: props) {
    const fileInputRef = useRef(null);

    const handleImageChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const newImages = Array.from(e.target.files);
            const imageUrls = newImages.map((file: any) => URL.createObjectURL(file));
            setImages((prevImages: string[]) => [...prevImages, ...newImages]);
            setImagePreviews((prevPreviews: string[]) => [...prevPreviews, ...imageUrls]);
        }
    };

    const handleCustomButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const removeImgBtn = (index: number) => {
        setImages((prevImages: string[]) => prevImages.filter((_: any, i: number) => i !== index));
        setImagePreviews((prevPreviews: string[]) => prevPreviews.filter((_: any, i: number) => i !== index));
    };

    return (
        <div className='flex flex-col mx-auto pt-3'>
            <div className='flex flex-row w-full gap-3'>
                <div className='grid grid-cols-4 gap-3'>
                    {imagePreviews.map((preview: string, i:any) => (
                        <div key={i} className='w-[100px] h-[100px] rounded-md relative'>
                            <svg onClick={() => removeImgBtn(i)}
                                className="fill-white mix-blend-difference z-50 w-6 h-6 flex cursor-pointer absolute right-0 top-0 rounded-full"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
                                <path
                                    d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z" />
                            </svg>
                            <img src={preview} alt={`Uploaded ${i}`} className='w-full h-full object-cover object-center rounded-md' />
                        </div>
                    ))}
                    <input className='hidden' type="file" multiple onChange={handleImageChange} ref={fileInputRef} />
                    <button type="button" onClick={handleCustomButtonClick} className={`border rounded-md px-4 py-2 w-[100px] h-[100px] cursor-pointer ${imagePreviews.length > 7 ? 'hidden' : ''}`}>Add images</button>
                </div>
            </div>
        </div>
    );
}
