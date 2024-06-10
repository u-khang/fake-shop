export default class CartStorage {
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
    const item = this.cartItems.find((item) => item.id == id);
    if (item) return true;
    return false;
  }
    
  addProduct(id, quantity = 1) {
    const item = this.cartItems.find((item) => item.id == id);
    if (item) item.quantity++;
    else {
      const item = { id, quantity };
      this.cartItems.push(item);
    }
    this.set();
  }

  removeProduct(id) {
    this.cartItems = this.cartItems.filter((item) => item.id != id);
    this.set();
  }

  updateProduct(id, quantity) {
    const item = this.cartItems.find((item) => item.id == id);
    if (item) item.quantity = quantity;
    this.set();
  }
}

