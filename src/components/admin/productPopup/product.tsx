import axios from "axios";

export default function Product({ setProducts, products, popupBtn }) {

    const togglerBtn = async (id: number) => {
        try {
            const updatedProducts = products.map((p) => {
                if (p.id === id) {
                    return { ...p, display: !p.display };
                }
                return p;
            });
            setProducts(updatedProducts);

            const currentDisplay = products.find(p => p.id === id)?.display;
            await axios.patch(`/api/products/${id}`, {
                display: !currentDisplay,
            });
        } catch (error) {
            console.error("Error updating product display:", error);
        }
    };
    return (
        <div className="flex flex-col mb-40">
            <span className="text-2xl px-5">Products</span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 h-auto w-full mx-auto">
                {products.map((product: any, i: number) => (
                    <div key={product.id} onClick={() => popupBtn(product, 'PUT')} className="flex flex-row mt-5 ml-5 h-[180px] w-[180px] md:h-[200px] md:w-[200px] 2xl:h-[250px] 2xl:w-[250px] shadow-2xl rounded-lg cursor-pointer">
                        <div className="flex w-full h-full">
                            <div className="flex flex-col relative w-full h-full">
                                <div className="top-0 left-0 w-full h-[65%]">
                                    <div className="cursor-pointer" onClick={(e) => { e.stopPropagation(); togglerBtn(product.id); }}>
                                        <svg className={` absolute top-0 right-2 w-[48] h-[48px] fill-none stoke-1 stroke-black/30 ${product.display ? 'hidden' : 'flex'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="1" y="5" width="22" height="14" rx="7" ry="7" className="fill-black/50" />
                                            <circle cx="8" cy="12" r="3" className=" fill-white/90 stroke-white stroke-[3]" />
                                        </svg>
                                        <svg className={`absolute top-0 right-2 w-[48] h-[48px] fill-none stoke-1 stroke-black/30 ${!product.display ? 'hidden' : 'flex'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="1" y="5" width="22" height="14" rx="7" ry="7" className="fill-white/50" />
                                            <circle cx="16" cy="12" r="3" className="fill-black/90 stroke-black stroke-[3]" />
                                        </svg>
                                    </div>
                                    {product.images && product.images.length > 0 ? (
                                        <img className="w-full h-full object-cover object-center rounded-t-lg select-none" src={product.images[0]} />
                                    ) : (
                                        <div className="flex justify-center items-center text-gray-500">
                                            No image available
                                        </div>
                                    )}
                                </div>
                                <div className="lg:mt-2 select-none">
                                    <div className="flex justify-center font-semibold text-[14px] lg:text-[16px] w-[80%] mx-auto">{product.name}</div>
                                    <div className="flex justify-center text-sm text-gray-600">Left: {product.stock}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}