exports.ProductPage = class ProductPage {
  constructor(page) {
    this.page = page;
    this.productList = ".inventory_item";
    this.pageTitle = ".title";
    this.cartLink = ".shopping_cart_link";
  }

  async addProductToCart(productName) {
    const product = this.page
      .locator(this.productList)
      .filter({ hasText: productName });

    await product.locator('[id^="add-to-cart-"]').click();
  }

  async openCart() {
    await this.page.locator(this.cartLink).click();
  }
};
