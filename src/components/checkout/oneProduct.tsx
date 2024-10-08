import Image from 'next/image';
export default function OneProduct({ product }: any) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(price);
    };
    return (
        <div className="flex flex-row items-center justify-between my-4 border-b border-b-white/10">
            <div className="flex">
                <div className='w-20 h-20 relative'>
                    <Image layout='fill' src={product.images[0]} alt={product.name} className="rounded-lg object-cover" />
                </div>
                <div className="flex flex-col ml-8">
                    <span className="lg:text-lg place-self-start text-bdot8">{product.name}</span>
                    <span className="text-bdot9 place-self-start text-xl pr-3 pt-2">€{formatPrice(product.price)}</span>
                </div>
            </div>
        </div>
    )
}