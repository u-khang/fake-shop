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
            </div>
        </div>
    )
}

export default ItemCard