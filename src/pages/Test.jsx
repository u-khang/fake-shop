import ItemCard from "../components/ItemCard"
import cake from "../assets/product-imgs/cakes/white-milk-chocolate.jpeg"
import productsData from "../products.json"

function Test() {
    const products = JSON.parse(JSON.stringify(productsData));
    const product1 = products[0];

    return (
        <div >
            <div className='h-44'></div>
            <ItemCard id={product1.id} name={product1.name} image={cake} price={product1.price}></ItemCard>
            {/* <p>{`../${product1.path}${product1.image}`}</p>
            <img src={cake}></img> */}
        </div>
    )
    
}

export default Test