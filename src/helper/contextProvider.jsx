import { createContext } from "react";
import { useState, useEffect } from "react";
import CartStorage from "./cartStorage";
import productsData from "../products.json"

const productsJSON = JSON.parse(JSON.stringify(productsData));

export const FakeShop = createContext();

export default function ShopProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(new CartStorage().get());

  const cartLS = new CartStorage();

  const getProductByID = (id) => {
    return products.find((product) => product.id == id);
  };

  const getCart = () => {
    return cartLS.get().map(({ id, quantity }) => {
      const product = getProductByID(id);
      return { ...product, quantity };
    });
  };

  const addProductToCart = (id, quantity) => {
    cartLS.addProduct(id, quantity);
    setCart(cartLS.get());
  };

  const removeProductFromCart = (id) => {
    console.log("cool");
    cartLS.removeProduct(id);
    setCart(cartLS.get());
  };

  const checkCartHas = (id) => {
    return cartLS.has(id);
  };

  const updateProduct = (id, quantity) => {
    cartLS.updateProduct(id, quantity);
    setCart(cartLS.get());
  };

  useEffect(() => {
    setProducts(productsJSON);
  }, []);

  return (
    <FakeShop.Provider
      value={{
        products,
        cart,
        getCart,
        getProductByID,
        addProductToCart,
        removeProductFromCart,
        updateProduct,
        checkCartHas,
      }}
    >
      {children}
    </FakeShop.Provider>
  );
}