import ItemCard from "../components/ItemCard"
import burger from "../assets/burger.jpg"

function Test() {
    return (
        <div>
            <ItemCard id={1} name={"burger"} image={'../src/assets/burger.jpg'} price={15.99}></ItemCard>
            <p>{burger}</p>
        </div>
    )
    
}

export default Test