import { useNavigate } from "react-router-dom";
export default function CheckoutBtn({product}) {
    const navigate = useNavigate();
    const handleBuyNow = () => {
        navigate('/checkout', { state: { product } });
    };
    return (
        <button onClick={handleBuyNow} className="w-full rounded-md px-2 py-2 text-md btn relative text-center cursor-pointer mb-3 bg-gray-200">
            <span className="relative z-10 text-md span inline-block text-center transition-colors">BUY NOW</span>
        </button>
    )
}