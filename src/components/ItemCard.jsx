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
        <div className="border rounded-lg hover:shadow-lg" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link to={`/shop/${id}`}>
                <div>
                    <img 
                        className="rounded-t-md"
                        src={`/product-imgs/${image}`}
                        alt={name}
                    />
                </div>
                <div className="p-4 pb-6">
                    <p className={`mb-2 ${underline ? "underline" : ""}`}>{name}</p>
                    <p className="text-gray-500 font-montserrat font-bold">{prefix}{price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ItemCard