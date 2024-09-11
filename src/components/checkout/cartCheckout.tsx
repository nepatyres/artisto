import Image from 'next/image';
export default function CartCheckout({ cartItems }:any) {
    const formatPrice = (price:number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(price);
    };
    return (
        cartItems.map((item:any, i:number) => (
            <div key={i} className="flex flex-row items-center justify-between my-4 border-b border-b-white/10">
                <div className="flex">
                    <div className='w-20 h-20 relative'>
                    <Image src={item.images[0]} layout='fill' alt={item.name} className="rounded-lg object-cover" />
                    </div>
                    <span className='bg-black text-white w-6 h-6 rounded-full text-md flex absolute justify-center items-center justify-self-end ml-16'>{item.quantity}</span>
                    <div className="flex flex-col ml-8">
                        <span className="lg:text-lg place-self-start text-bdot8">{item.name}</span>
                        <span className="text-bdot9 place-self-start text-xl pr-3 pt-2">€{formatPrice(item.price)}</span>
                    </div>
                </div>
            </div>
        ))
    )
}