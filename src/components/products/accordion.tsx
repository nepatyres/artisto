import React, { useState } from "react";
export default function ProductAccordion() {
    const [delivery, setDelivery] = useState(false);
    const [description, setDescription] = useState(true);
    const deliveryBtn = () => {
        setDelivery(!delivery);
    }

    const descriptionBtn = () => {
        setDescription(!description);
    }
    return (
        <div className=" flex flex-col w-[90%] pb-12">
            <div className="flex flex-col w-full border-t">
                <div className="flex flex-row items-center justify-between cursor-pointer my-3" onClick={descriptionBtn}>
                    <span className="text-sm text-black font-medium">Description</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-7 w-7 fill-black' viewBox="0 0 24 24" >
                        <g>
                            {description ?
                                <path id="Vector" d="M6 12H12M12 12H18M12" className="stroke-black stroke-[.6] fill-white" strokeLinecap="round" strokeLinejoin="round" /> :
                                <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" className="stroke-black stroke-[.6]" strokeLinecap="round" strokeLinejoin="round" />
                            }
                        </g>
                    </svg>
                </div>
                {description && <span className="text-md text-black/60 mb-2">If something isn’t quite right, you have 14 days to send it back to us.</span>}
            </div>
            <div className="flex flex-col w-full border-y">
                <div className="flex flex-row items-center justify-between cursor-pointer my-3" onClick={deliveryBtn}>
                    <span className="text-sm text-black font-medium">Delivery & Returns</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-7 w-7 fill-black' viewBox="0 0 24 24" >
                        <g>
                            {delivery ?
                                <path id="Vector" d="M6 12H12M12 12H18M12" className="stroke-black stroke-[.6] fill-white" strokeLinecap="round" strokeLinejoin="round" /> :
                                <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" className="stroke-black stroke-[.6]" strokeLinecap="round" strokeLinejoin="round" />
                            }
                        </g>
                    </svg>
                </div>
                {delivery && <span className="text-md text-black/60 mb-2">If something isn’t quite right, you have 14 days to send it back to us.</span>}
            </div>
        </div>
    )
}