import { useRouter } from "next/router";
export default function CheckoutBtn({ product }:any) {
    const router = useRouter();
    const handleCheckout = () => {
        router.push({
            pathname: '/checkout',
            query: { product: JSON.stringify(product) }
        });
    };
    return (
        <button onClick={handleCheckout} className="w-full rounded-md px-2 py-2 text-md btn relative text-center cursor-pointer mb-3 bg-gray-200">
            <span className="relative z-10 text-md span inline-block text-center transition-colors">BUY NOW</span>
        </button>
    )
}