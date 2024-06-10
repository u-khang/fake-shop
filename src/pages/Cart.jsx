import { FakeShop } from "../helper/contextProvider";
import { useContext } from "react";

function Cart() {
    const { getCart, removeProductFromCart, updateProduct } = useContext(FakeShop);
    return <p>{getCart()[0].name}</p>
}

export default Cart