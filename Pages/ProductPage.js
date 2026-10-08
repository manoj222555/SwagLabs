exports.ProductPage = class ProductPage {
  constructor(page) {
    this.page = page;
    this.productList = ".inventory_list>div>div";
    this.addToCartbtn1 = "#add-to-cart-sauce-labs-backpack";
    this.addToCartbtn2 = "#add-to-cart-sauce-labs-bike-light";
    this.addCartbtn = "a[aria-label='Cart, 2 items']";
  }

  async addProductToCart(productName) {
    const productList = await this.page.$$(this.productList);
    for (const product of productList) {
      if (productName === (await product.textContent())) {
        await product.click();
        break;
      }
    }
    await this.page.locator(this.addToCartbtn1).click();
    await this.page.locator(this.addToCartbtn2).click();
    // await this.page.locator(this.addCartbtn).click({ force: true });
  }
};
