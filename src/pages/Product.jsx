import { useLoaderData } from "react-router-dom";
import productsData from "../products.json"
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CartStorage from "../helper/CartStorage.js";

export async function loader({ params }) {
    const products = JSON.parse(JSON.stringify(productsData));
    const product = products[params.id]
    return product
}

function Product() {
    const { id, name, price} = useLoaderData();

    return (
        <div>
            <p>{id} {name} {price}</p>
            <Link to={"/checkout"}>to checkout</Link>
            <Button 
                text="add to cart" 
                onClick={() => {
                    const cart = new CartStorage();
                    cart.addProduct(id);
                }}
            >
            </Button>
        </div>
    )
}

export default Product