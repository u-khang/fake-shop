import { Link } from "react-router-dom";
import Button from "./Button";

function ItemCard({id, name, price, image}) {
    return (
        <div>
            <div>
                <Link to={`${id}`}>
                    <img 
                        src={image}
                        alt={name}
                    />
                </Link>
            </div>
            <div>
                <Link>
                    <p>{name}</p>
                </Link>
                <Link>
                    <p>{price}</p>
                </Link>
                <Button text={'add to cart'}></Button>
            </div>
        </div>
    )
}

export default ItemCard