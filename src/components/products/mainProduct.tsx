import CartBtn from "@/components/cart/cartBtn";
export default function MainProduct({ product, img }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="flex w-full h-screen mx-auto flex-col pt-[80px]">
            <div className="flex flex-col lg:flex-row w-[95%] h-full lg:w-full mx-auto lg:border-y lg:border-black">
                <div className="w-full lg:h-full lg:w-[55%] xl:w-[65%] mx-auto lg:border-r lg:border-black items-center justify-center">
                    <div className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[80%] 2xl:h-full flex mx-auto xl:mx-0 border">
                        <img src={img} className="w-full h-full object-center overflow-hidden" alt={product.name} />
                    </div>
                    {/* <div className="flex flex-row w-full gap-3 mt-5 justify-start lg:justify-start">
                            {product.images.map((image, i) => (
                                i < 4 && <img key={i} src={image} className="w-[80px] h-[80px] cursor-pointer rounded-lg object-center" onClick={() => selectImg(i)} alt="" />
                            ))}
                        </div> */}
                </div>
                <div className="w-full h-full lg:justify-center 2xl:justify-start lg:w-[45%] xl:w-[35%] lg:pl-8 xl:pl-12 pt-12 flex flex-col">
                    <span className="text-3xl 2xl:text-4xl 2xl:font-bold">{product.name}</span>
                    <span className="text-3xl text-black/70 pt-2">€{formatPrice(product.price)}</span>
                    <div className="flex flex-col w-[90%] gap-3 mt-auto pb-12">
                        <button className="w-full border border-black rounded-md px-2 py-2 text-md">BUY NOW</button>
                        <CartBtn product={product} />
                    </div>
                </div>
            </div>
        </div>
    )
}