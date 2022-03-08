import HomePage from "../page-objects/home-page";

describe("Add to Cart Functionality", () => {
  const loginPage = new HomePage();

  it("Opens the page", () => {
    loginPage.visitHomePage();
  });
});
