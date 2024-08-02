import PostBestseller from './PostBestseller';
import PostForm from './postForm';
import PutForm from './putForm';

interface props {
    setPopup: (value: boolean) => void;
    product: object;
    products: object[];
    form: string;
}

export default function ProductPopup({ setPopup, product, products, form }: props) {

    const closeBtn = () => {
        setPopup(false);
    }

    return (
        <div className='h-screen absolute overflow-hidden m-0 z-20'>
            <div className='flex fixed w-full h-screen backdrop-blur-md top-0 left-0 justify-center items-center z-10 transition-opacity-transform duration-1000 ease-in-out transform'>
                <div className='flex relative justify-center bg-white w-[600px] h-[700px] border-2 border-black/[.07] shadow-2xl rounded-lg'>
                    <svg onClick={closeBtn}
                        className="fill-zinc-400 h-11 w-11 flex cursor-pointer absolute right-0 top-0 mr-3 mt-3 rounded-full"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
                        <path
                            d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z" />
                    </svg>
                    {form === 'POST' ? <PostForm setPopup={setPopup} /> : form === 'PUT' ? <PutForm setPopup={setPopup} product={product} /> : form === 'GET' ? <PostBestseller setPopup={setPopup} products={products}/> : ''}
                </div>
            </div>
        </div>
    );
};