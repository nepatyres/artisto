import CartBtn from "@/components/cart/cartBtn";
export default function MainProduct({ product, img, selectImg }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="flex flex-wrap flex-col lg:flex-row w-[95%] h-auto lg:w-full mx-auto">
            <div className="w-full flex flex-row lg:h-full lg:w-[55%] xl:w-[65%] mx-auto lg:border-r lg:border-top-black justify-center">
                <div className="flex flex-col gap-3 justify-start sticky h-screen top-0 mt-20 border-y border-black pr-1">
                    {product.images.map((image, i) => (
                        <img key={i} src={image} className="w-[100px] h-[80px] cursor-pointer rounded-sm object-center" onClick={() => selectImg(i)} alt="" />
                    ))}
                </div>
                <div className="w-full flex-col h-[350px] sm:h-[400px] md:h-[500px] lg:h-[80%] 2xl:h-full flex mx-auto xl:mx-0 gap-1 pt-20">
                    {product.images.map((img, i) => (
                        <img src={img} key={i} className="w-full h-full object-center" />
                    ))}
                </div>
            </div>
            <div className="w-full h-screen lg:w-[45%] xl:w-[35%] lg:pl-8 xl:pl-12 flex flex-col sticky top-0 mt-20 border-l border-y border-black">
                <div className="w-full flex-col flex mt-20">
                    <span className="text-3xl 2xl:text-4xl">{product.name}</span>
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