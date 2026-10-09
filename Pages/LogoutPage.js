exports.LogoutPage = class LogoutPage {
  constructor(page) {
    this.page = page;
    this.menuButton = "#react-burger-menu-btn";
    this.logoutButton = "#logout_sidebar_link";
  }

  async logout() {
    await this.page.locator(this.menuButton).click();
    await this.page.locator(this.logoutButton).click();
  }
};
