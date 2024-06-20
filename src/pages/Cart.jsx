import { FakeShop } from "../helper/contextProvider";
import { useContext } from "react";
import Button from "../components/Button.jsx";

function Cart() {
    const { getCart, removeProductFromCart, updateProduct } = useContext(FakeShop);
    return (
        <div>
            <div className="h-44"></div>
            {getCart().map(
            ({ id, name, price, image, quantity }) => {
                return <div>
                    {id} {name} {price} {quantity}
                    <Button text="remove item" onClick={() => removeProductFromCart(id)}></Button>
                </div>
            }
            )}
        </div>
    )
}

export default Cart