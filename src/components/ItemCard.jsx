import { Link } from "react-router-dom";
import { useState } from "react";

// const imgModules = import.meta.glob('../assets/product-imgs/*.jpeg')
// console.log(imgModules);

// const images = require.context("../assets/product-imgs", true);
// function loadImage(image) {
//     return images(`./${image}`);
// }


// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }
// const images = importAll(require.context('../assets/product-imgs', false, /\.(png|jpe?g|svg)$/));

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
                        // src={loadImage(image)}
                        // src={images[image]}
                        // src={imgModules[image]().then((mod) => mod)}
                        src={''}
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