import productsData from "../products.json"
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const products = JSON.parse(JSON.stringify(productsData));
const cakeItems = products.filter((product) => {
    return product.category == "cake"
})


function Cakes() {
    return (
        <div className="px-4">
            <div className='h-24 sm:h-32 md:h-48'></div>
            <h1 className="text-3xl">Cake Slices</h1>
            <div
                className="mt-6 grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6"
            >
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