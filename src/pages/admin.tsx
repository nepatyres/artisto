import React, { useState } from "react";
import '../app/globals.css';

export default function Admin() {
    const correctPass = process.env.REACT_APP_ADMIN_PASSWORD;
    const [isLogged, setIsLogged] = useState(false);
    const [password, setPassword] = useState('');

    const passCheck = () => {
        if (password === 'a') {
            setIsLogged(true);
        }
    }

    const [photos, setPhotos] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const photoUrls = files.map(file => URL.createObjectURL(file));
        setPhotos(prevPhotos => [...prevPhotos, ...photoUrls]);
    };
    return (
        <div>
            {/* {!isLogged ?
                (<div className="w-full h-screen flex items-center justify-center flex-col">
                    <input type="password" className="border border-black" name="" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={passCheck}>login</button>
                </div>) 
                :
                ( */}
            <div className="flex flex-col mt-5 ml-5">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-3">
                        <span>1.</span>
                        <input type="text" placeholder="Items Name" className="border border-black h-min px-1" />
                        <input type="number" placeholder="Items count" className="border border-black h-min px-1" />
                        <input type="text" placeholder="description" className="border border-black h-min px-1" />
                        <button className="bg-blue-700 text-white px-3 rounded-full">save</button>
                        <button className="bg-red-700 text-white px-2 rounded-full">delete</button>
                    </div>
                    <div className="flex flex-row flex-wrap mt-2">
                        <input type="file" multiple onChange={handleFileChange} className="h-min" />
                        {photos.map((photo, i) => (
                            <div key={i} className="m-2 h-[100px] w-[100px]">
                                <img src={photo} alt={`Uploaded ${i + 1}`} className="object-cover h-full w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* )
            } */}
        </div>
    )
}