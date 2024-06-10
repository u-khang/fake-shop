import { FakeShop } from "../helper/contextProvider";
import { useContext } from "react";
import Button from "../components/Button.jsx";

function Cart() {
    const { getCart, removeProductFromCart, updateProduct } = useContext(FakeShop);
    return <div>{getCart().map(
        (product) => {
            return <div>
                {product.id} {product.name} {product.price} {product.quantity}
                <Button text="remove item" onClick={() => removeProductFromCart(product.id)}></Button>
            </div>
        }
    )}</div>
}

export default Cart