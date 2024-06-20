import { Form } from "react-router-dom"
import Button from "../components/Button"
import productsData from "../products.json"
import { Link } from "react-router-dom";

const products = JSON.parse(JSON.stringify(productsData));
console.log(products);

function Shop() {

    return (
        <div>
            <div className='h-44'></div>
            <div>
                {products.map((product) => {
                    return (
                    <div>
                        <Link to={`${product.id}`}>
                            <p>{product.id} {product.name} {product.price}</p>
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Shop