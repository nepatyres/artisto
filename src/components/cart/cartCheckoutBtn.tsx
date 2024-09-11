import Link from 'next/link';
export default function CartCheckoutBtn() {
    return (
        <Link href="/checkout" className="relative w-full flex rounded-sm uppercase text-[14px] bg-white btn justify-center py-2">
            Proceed to checkout
        </Link>
    );
}

