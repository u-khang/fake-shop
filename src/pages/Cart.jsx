import { FakeShop } from "../helper/contextProvider";
import { useContext } from "react";
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";

function Cart() {
    const { getCart, removeProductFromCart, updateProduct } = useContext(FakeShop);
    // let subtotal = 0;
    // for (item in getCart()) {
    //     subtotal += parseFloat(item.price) * item.quantity;
    //     return subtotal.toFixed(2)
    // }
    return (
        <div className="px-4 pb-8 md:mx-28">
            <div className='h-24 sm:h-32 md:h-48'></div>
            {getCart().length > 0 ?

                <div>
                    <div className="flex">
                        <h1 className="text-4xl text-rose-950 mb-5 w-11/12">Your cart</h1>
                    </div>
                    <div className="flex mb-2 text-gray-500 text-xs font-bold">
                        <h1 className="w-1/2 font-montserrat">Product</h1>
                        <h1 className="w-1/2 font-montserrat text-right">Total</h1>
                    </div>
                    <hr className="mb-10"></hr>
                    {getCart().map(
                        ({ id, name, prefix, price, image, quantity }) => {
                            return (
                            <div className="mb-10">
                                <div className="flex">
                                    <div className="w-2/5">
                                        <img 
                                            className="w-24 rounded-md"
                                            src={`/product-imgs/${image}`}
                                        >
                                        </img>
                                    </div>
                                    <div className="w-3/5">
                                        <p className="mb-2">{name}</p>
                                        <p className="mb-1 text-gray-500 font-montserrat text-xs font-bold">{prefix}{price}</p>
                                        <p className="text-gray-500 font-montserrat text-xs font-bold">Quantity: {quantity}</p>
                                        <button className="w-1/12" onClick={() => removeProductFromCart(12)}>
                                            <span class="material-symbols-outlined">
                                                delete
                                            </span>
                                        </button>
                                    </div>
                                    <div className="w-1/6 text-right">
                                        <p className="font-montserrat font-bold">{prefix}{(parseFloat(price) * quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    )}
                    <hr className="mb-5"></hr>
                    <p className="text-center text-lg mb-4">
                        Subtotal &nbsp;&nbsp;&nbsp;
                        <span className="font-montserrat font-bold">
                            $
                            {getCart()
                                .reduce(
                                    (total, { price, quantity }) =>
                                    total + parseFloat(price) * parseInt(quantity),
                                    0,
                                )
                                .toFixed(2)}
                        </span>
                    </p>
                    <Link to="/checkout">
                        <Button
                            text="Check out" className="w-full bg-rose-950 hover:bg-rose-900 transition"
                        ></Button>
                    </Link>
                    
                </div>

                : <p className="mt-20 text-4xl w-full p-auto text-center">Your cart is empty</p> 
            }
        </div>
    )
}

export default Cart