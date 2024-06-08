import { Form } from "react-router-dom"
import Button from "../components/Button"
import productsData from "../products.json"

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
                    return <p>{product.name} {product.price}</p>
                })}
            </div>
        </div>
    )
}

export default Shop