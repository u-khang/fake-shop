import { Link } from "react-router-dom";

function ItemCard({id, name, price, image, prefix="$"}) {
    return (
        <div className="border w-60 rounded-lg">
            <Link to={`/shop/${id}`}>
                <div>
                    <img 
                        className="rounded-t-md"
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="p-2 py-3">
                    <p>{name}</p>
                    <p>{prefix}{price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ItemCard