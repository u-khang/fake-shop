import { Link } from "react-router-dom";
import { useState } from "react";

function ItemCard({id, name, price, image, prefix="$"}) {
    const [underline, setUnderline] = useState(false);
    const handleMouseEnter = e => {
        setUnderline(true);
    }
    const handleMouseOut = e => {
        setUnderline(false);
    }

    return (
        <div className="border rounded-lg" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
            <Link to={`/shop/${id}`}>
                <div>
                    <img 
                        className="rounded-t-md"
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="p-2 py-3">
                    <p className={`${underline ? "underline" : "none"}`}>{name}</p>
                    <p>{prefix}{price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ItemCard