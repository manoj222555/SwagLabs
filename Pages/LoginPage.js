exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "#user-name";
    this.passwordInput = '[data-test="password"]';
    this.LoginButton = '[data-test="login-button"]';
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async Login(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.LoginButton).click();
  }
};
