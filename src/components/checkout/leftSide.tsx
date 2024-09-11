import React, { useState } from "react";
export default function LeftSide({ footer }: any) {
    const [selectedCountry, setSelectedCountry] = useState('');
    const countries = ["United States", "Canada", "Mexico", "Argentina", "Brazil", "Chile", "Colombia", "Uruguay", "Paraguay", "Peru", "United Kingdom", "France", "Germany", "Spain", "Italy", "Sweden", "Norway", "Denmark", "Finland", "Netherlands", "Belgium", "Austria", "Switzerland", "Ireland", "Portugal", "Greece", "Poland", "Czech Republic", "Hungary", "Romania", "Croatia", "Slovakia", "Slovenia", "Estonia", "Latvia", "Lithuania", "Australia", "New Zealand", "Fiji", "Japan", "South Korea", "Singapore", "Taiwan", "Malaysia", "Thailand", "Vietnam", "United Arab Emirates", "Israel", "Qatar", "Saudi Arabia", "Oman", "Kuwait", "Costa Rica", "Panama", "Jamaica", "Barbados", "Bahamas", "Trinidad and Tobago", "Dominican Republic"];
    const handleCountryChange = (event: any) => {
        setSelectedCountry(event.target.value);
    };
    return (
        <div className='flex lg:border-r w-full lg:justify-end justify-center'>
            <div className='flex mt-8 w-[80%] md:w-[60%] lg:w-[90%] xl:w-[80%] 2xl:w-[60%] lg:pr-10 flex-col lg:mb-20'>
                <div className='flex flex-col'>
                    <span className='text-2xl font-roboto mb-4'>Contact</span>
                    <input type="email" className="bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="email" placeholder="Email" name='email' required />
                    <div className='justify-start flex flex-row items-center mt-1'>
                        <input className='self-start w-4 h-4 mt-2' type="checkbox" name="" id="" />
                        <span className='font-roboto pl-2 mt-1'>Email me with news and offers</span>
                    </div>
                </div>
                <div className='flex flex-col mt-4'>
                    <span className='text-2xl font-roboto mt-8 mb-4'>Delivery</span>
                    <select name="country" id="country" value={selectedCountry} onChange={handleCountryChange} className='bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full'>
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                    <div className='flex flex-row mt-3 gap-2'>
                        <input type="name" className="bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="name" placeholder="Name" name='name' required />
                        <input type="name" className="bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="lastName" placeholder="Last Name" name='lastName' required />
                    </div>
                    <input type="company" className="bg-white text-black mt-3 py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="company" placeholder="Company (optional)" name='company' />
                    <input type="address" className="bg-white text-black mt-3 py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="address" placeholder="Address" name='address' required />
                    <input type="address" className="bg-white text-black mt-3 py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="address" placeholder="Apartment, suite, etc. (optional)" name='address' required />
                    <div className='flex flex-row mt-3 gap-2'>
                        <input type="code" className="bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="postCode" placeholder="Post code" name='postCode' required />
                        <input type="name" className="bg-white text-black py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="city" placeholder="City" name='city' required />
                    </div>
                    <input type="phone" className="bg-white text-black mt-3 py-4 px-3 focus:outline-2 focus:outline-blue-400 rounded-md focus:text-black border border-black/.70 w-full" id="phone" placeholder="Phone" name='phone' required />
                    <button className='bg-black hidden justify-center lg:flex text-white mt-3 py-4 px-3 focus:outline-2 rounded-md border w-full font-roboto btnB relative'>
                        <span>Review order</span>
                    </button>
                </div>
                <div className='w-full mt-4 border-t hidden lg:flex'>
                    <div className='flex w-full flex-row mt-4 justify-between px-4'>
                        {footer[1].links.map((link: any, i: number) => (
                            <a key={i} href={link.link} className="text-bdot8 afooter font-robotoL text-[12px]">{link.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}