class CartStorage {
    constructor() {
        this.cart = this.get();
    }

    get() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) return [];
        return cart.map((product) => ({
          ...product,
          quantity: parseInt(product.quantity),
        }));
    }
    
    addProduct(id, quantity = 1) {
        const product = this.products.find((product) => product.id == id);
        if (product) product.quantity++;
        else {
          const product = { id, quantity };
          this.products.push(product);
        }
        this.set();
      }
}

export default CartStorage