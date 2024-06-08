import { Form } from "react-router-dom"
import Button from "../components/Button"
import productsData from "../products.json"
import { Link } from "react-router-dom";

const products = JSON.parse(JSON.stringify(productsData));

function Shop() {

    return (
        <div>
            <Form>
                <input type="text" placeholder="chocolate mille feuille"></input>
                <Button text="search"/>
            </Form>
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