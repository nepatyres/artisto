import React, { useState, useEffect } from "react";
import axios from "axios";
import Bestseller from "./bestseller";
import MoreProducts from "./moreProducts";

export default function Accordion({ popupBtn, product }: any) {
    const [accordion, setAccordion] = useState<boolean>(false);

    const accordionBtn = () => {
        setAccordion(!accordion);
        localStorage.setItem("accordionState", (!accordion).toString());
    }

    useEffect(() => {
        const savedAccordionState = localStorage.getItem("accordionState");
        if (savedAccordionState !== null) {
            setAccordion(savedAccordionState === "true");
        }
    }, []);

    return (
        <div className="flex flex-col w-full h-auto border-y border-y-black my-8">
            <div className="flex flex-row h-[60px] w-full items-center justify-between px-5 cursor-pointer" onClick={accordionBtn}>
                <span className="text-2xl self-center">Edit home page</span>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12' viewBox="0 0 24 24" fill="none">
                    <g>
                        {accordion ?
                            <path id="Vector" d="M6 12H12M12 12H18M12" className="stroke-black/90 stroke-[.6]" strokeLinecap="round" strokeLinejoin="round" /> :
                            <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" className="stroke-black/90 stroke-[.6]" strokeLinecap="round" strokeLinejoin="round" />
                        }
                    </g>
                </svg>
            </div>
            {accordion &&
                <>
                    <Bestseller product={product} popupBtn={popupBtn} />
                    <MoreProducts product={product} popupBtn={popupBtn} />
                </>}
        </div>
    )
}
