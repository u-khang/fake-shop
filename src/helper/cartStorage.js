class CartStorage {
  constructor() {
      this.cartItems = this.get();
  }

  get() {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      if (!cartItems) return [];
      return cartItems.map((item) => ({
        ...item,
        quantity: parseInt(item.quantity),
      }));
  }

  set() {
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
  }

  has(id) {
    const product = this.cartItems.find((product) => product.id == id);
    if (product) return true;
    return false;
  }
    
  addProduct(id, quantity = 1) {
      const product = this.cartItems.find((product) => product.id == id);
      if (product) product.quantity++;
      else {
        const product = { id, quantity };
        this.cartItems.push(product);
      }
      this.set();
  }

  removeProduct(id) {
    this.cartItems = this.cartItems.filter((product) => product.id != id);
    this.set();
  }

  updateProduct(id, quantity) {
    const product = this.cartItems.find((product) => product.id == id);
    if (product) product.quantity = quantity;
    this.set();
  }
}

export default CartStorage