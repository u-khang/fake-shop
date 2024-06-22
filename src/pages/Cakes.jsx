import productsData from "../products.json"
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const products = JSON.parse(JSON.stringify(productsData));
const cakeItems = products.filter((product) => {
    return product.category == "cake"
})

// const images = require.context("../assets/product-imgs", true);
// function loadImage(image) {
//     return images(`./${image}`);
// }

// products.forEach((product) => {
//     product.image = loadImage(product.image);
// });

function Cakes() {
    return (
        <div>
            <div className='h-44'></div>
            <div>
                {cakeItems.map((product) => {
                    return (
                    <div>
                        <Link to={`/shop/${product.id}`}>
                            <ItemCard
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                path={product.path}
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