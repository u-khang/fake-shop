import { useLoaderData } from "react-router-dom";
import productsData from "../products.json"

export async function loader({ params }) {
    const products = JSON.parse(JSON.stringify(productsData));
    const product = products[params.id]
    return product
}

function Product() {
    const { id, name, price} = useLoaderData();

    return <p>{id} {name} {price}</p>
}

export default Product