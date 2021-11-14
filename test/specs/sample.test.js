const dialog = require("../pageobjects/dialog.page.js");
describe("7Mind Login", () => {
  it("Automate Valid User Email Login", async () => {
    const context = dialog.label;
    //click continue button
    await dialog.continueBtn.click();
    //click login button
    await dialog.loginBtn.click();
    //click email button
    await dialog.emailBtn.click();
    //enter email address
    await dialog.emailAddressField.setValue("dejihbk012@gmail.com");
    //click enter button on touchpad
    await driver.pressKeyCode(66);
    //enter password
    await dialog.passwordField.setValue("olalekan");
    //click enter button on touchpad
    await driver.pressKeyCode(66);
    //assert homepage contains 7mind logo
    await expect(context).toHaveTextContaining("7Mind");
  });
});
