export default function Footer() {
    return (
        <footer className="w-full bg-black py-6 text-white rounded-t-2xl">
            <div className="container mx-auto mt-auto text-center flex flex-col">
                <a href="/returns-and-cancellation">Returns & Cancellation</a>
                <a href="/privacy">Privacy</a>
                <p className="text-xs">Designed and developed by <a href="https://julijus.com/">Julijus</a></p>
            </div>
        </footer>
    );
}