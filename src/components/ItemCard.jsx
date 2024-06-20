import { Link } from "react-router-dom";
import { useState } from "react";

function ItemCard({id, name, price, image, prefix="$"}) {
    const [underline, setUnderline] = useState(false);
    const handleMouseOver = e => {
        setUnderline(true);
    }
    const handleMouseOut = e => {
        setUnderline(false);
    }

    return (
        <div className="border rounded-lg transition hover:-translate-y-1 hover:shadow-lg" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link to={`/shop/${id}`}>
                <div>
                    <img 
                        className="rounded-t-md"
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="p-4 pb-6">
                    <p className={`mb-2 ${underline ? "underline" : ""}`}>{name}</p>
                    <p className="text-lg">{prefix}{price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ItemCard