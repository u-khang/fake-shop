import { FakeShop } from "../helper/contextProvider";
import { useContext } from "react";

function Cart() {
    const { getCart, removeProductFromCart, updateProduct } = useContext(FakeShop);
    return <div>{getCart().map(
        (product) => {
            return <p>{product.id} {product.name} {product.price} {product.quantity}</p>
        }
    )}</div>
}

export default Cart