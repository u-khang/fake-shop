import { FakeShop } from "../helper/contextProvider";
import { useContext } from "react";
import Button from "../components/Button.jsx";

function Cart() {
    const { getCart, removeProductFromCart, updateProduct } = useContext(FakeShop);
    return (
        <div className="px-4 pb-8 md:mx-28">
            <div className='h-24 sm:h-32 md:h-48'></div>
            {getCart().length > 0 ?

                <div>
                    <h1 className="text-4xl text-rose-950 mb-5">Your cart</h1>
                    <div className="flex mb-2">
                        <h1 className="w-1/2">Product</h1>
                        <h1 className="w-1/2 text-right">Total</h1>
                    </div>
                    <hr className="mb-10"></hr>
                    {getCart().map(
                        ({ id, name, prefix, price, image, quantity }) => {
                            return (
                            <div className="mb-12">
                                <div className="flex">
                                    <div className="w-2/5">
                                        <img 
                                            className="w-28 rounded-md"
                                            src={`/product-imgs/${image}`}
                                        >
                                        </img>
                                    </div>
                                    <div className="w-3/5">
                                        {/* {id} {name} {price} {quantity} */}
                                        <p>{name}</p>
                                        <p>{prefix}{price}</p>
                                        <p>Quantity: {quantity}</p>
                                    </div>
                                    <div className="w-1/6 text-right">
                                        <p className="">{prefix}{(parseFloat(price) * quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    )}
                    <Button 
                        text="Clear cart" onClick={() => removeProductFromCart(12)}>
                    </Button>
                </div>

                : <p>Your cart is empty</p> 
            }
        </div>
    )
}

export default Cart