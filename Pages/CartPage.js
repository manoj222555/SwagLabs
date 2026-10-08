exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.Removebtn = "#remove-sauce-labs-backpack";
  }

  async removeProduct() {
    await this.page.locator(this.Removebtn).click();
  }
};
