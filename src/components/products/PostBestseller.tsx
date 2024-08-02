
export default function PostBestseller({ setPopup, products }) {

    return (
        <div className="w-[80%] flex flex-col pt-5">
            <span className="text-2xl">Choose bestseller</span>
            <div className='grid grid-cols-4 gap-3 pt-8'>
                {products.map((product, i) => (
                    <div key={i} className='w-[100px] h-[100px] rounded-md relative cursor-pointer'>
                        <img src={product.images[0]} alt={`Uploaded ${i}`} className='w-full h-full object-cover object-center rounded-md' />
                    </div>
                ))}
            </div>
        </div>
    )
}