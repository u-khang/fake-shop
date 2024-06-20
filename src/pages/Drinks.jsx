import productsData from "../products.json"
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const products = JSON.parse(JSON.stringify(productsData));
const drinkItems = products.filter((product) => {
    return product.category == "drink"
})

function Cakes() {
    return (
        <div>
            <div className='h-44'></div>
            <div>
                {drinkItems.map((product) => {
                    return (
                    <div>
                        <Link to={`/shop/${product.id}`}>
                            <ItemCard
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                prefix={product.prefix}
                            />
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Cakes