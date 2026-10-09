exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = ".cart_item";
  }

  async removeProduct(productName) {
    const product = this.page
      .locator(this.cartItems)
      .filter({ hasText: productName });

    await product.getByRole("button", { name: "Remove" }).click();
  }
};
