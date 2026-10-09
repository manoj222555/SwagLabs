import { test, expect } from "@playwright/test";

import { LoginPage } from "../Pages/LoginPage";
import { ProductPage } from "../Pages/ProductPage";
import { CartPage } from "../Pages/CartPage";
import { LogoutPage } from "../Pages/LogoutPage";

test("SauceDemo - Login, Add Products, Remove Product and Logout", async ({
  page,
}) => {
  // 1. Login
  const login = new LoginPage(page);

  await login.gotoLoginPage();
  await login.login("standard_user", "secret_sauce");

  // Verify successful login
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator(".title")).toHaveText("Products");

  // 2. Add products to cart
  const product = new ProductPage(page);

  await product.addProductToCart("Sauce Labs Backpack");
  await product.addProductToCart("Sauce Labs Bike Light");

  // 3. Open cart
  await product.openCart();

  // Verify both products are present
  const cart = new CartPage(page);

  await expect(page.locator(".cart_item")).toHaveCount(2);

  await expect(
    page.locator(".cart_item").filter({ hasText: "Sauce Labs Backpack" }),
  ).toBeVisible();

  await expect(
    page.locator(".cart_item").filter({ hasText: "Sauce Labs Bike Light" }),
  ).toBeVisible();

  // 4. Remove Backpack
  await cart.removeProduct("Sauce Labs Backpack");

  // Verify only one product remains
  await expect(page.locator(".cart_item")).toHaveCount(1);

  await expect(
    page.locator(".cart_item").filter({ hasText: "Sauce Labs Bike Light" }),
  ).toBeVisible();

  // 5. Logout
  const logout = new LogoutPage(page);

  await logout.logout();

  // Verify logout
  await expect(page.locator("#login-button")).toBeVisible();
});
