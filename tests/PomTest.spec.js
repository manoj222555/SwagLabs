import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { ProductPage } from "../Pages/ProductPage";
import { CartPage } from "../Pages/CartPage";

test("Test1", async ({ page }) => {
  //Login
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.Login("standard_user", "secret_sauce");
  //Products
  const Product = new ProductPage(page);
  await Product.addProductToCart("Sauce Labs Backpack");
  await Product.addProductToCart("Sauce Labs Bike Light");
  //Cart
  const Cart = new CartPage(page);
  await Cart.removeProduct();
  //Logout

  await page.waitForTimeout(5000);
});
