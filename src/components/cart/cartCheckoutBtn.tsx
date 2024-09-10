import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CartCheckoutBtn({ cartItems }) {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Component is mounted
        setIsMounted(true);
    }, []);

    const handleCheckout = () => {
        if (!isMounted) return; // Ensure the router is mounted
        localStorage.setItem('cartSelectedProduct', JSON.stringify(cartItems));
        router.push('/checkout');
    };

    if (!isMounted) {
        return null; // Avoid rendering during SSR or until the component is mounted
    }

    return (
        <button onClick={handleCheckout} className="relative w-full flex rounded-sm uppercase text-[14px] bg-white btn justify-center py-2">
            Proceed to checkout
        </button>
    );
}
