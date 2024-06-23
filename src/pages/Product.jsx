import { useLoaderData } from "react-router-dom";
import productsData from "../products.json"
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CartStorage from "../helper/cartStorage.js";

export async function loader({ params }) {
    const products = JSON.parse(JSON.stringify(productsData));
    const product = products[params.id]
    return product
}

function Product() {
    const { id, image, name, prefix, price } = useLoaderData();

    return (
        <div className="px-4 pb-4 md:mx-24">
            <div className="h-24 sm:h-32 md:h-48"></div>
            <div className="sm:flex">
                <img className="mb-4 border rounded-lg m-auto sm:w-1/2 sm:mr-8 md:mr-15 md:w-3/5" src={`../product-imgs/${image}`}></img>
                <div className="md:w-2/5">
                    <h1 className="mb-2 text-3xl">{name}</h1>
                    <p className="text-xl mb-4 tracking-wider">From {prefix}{price}</p>
                    <p className="mb-4">Lorem ipsum souffle, sit umami confiture adipisicing elit. Scone eligendi impedit expedita nutella vitae waffle ipsum dango.</p>
                    <p className="mb-4">Allergens: komugi, shio, shoyu, koshou</p>
                    <Button 
                        className="w-full bg-rose-950"
                        text="Add to cart" 
                        onClick={() => {
                            const cart = new CartStorage();
                            cart.addProduct(id);
                        }}
                    >
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Product