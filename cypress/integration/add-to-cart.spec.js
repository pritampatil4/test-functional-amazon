const {
  visitHomePage,
  isLogoVisible,
  clickOnCart,
} = require("../page-objects/home-page");
const {
  isBasketEmptyMessageVisible,
  enterProductNameAndSearch,
} = require("../page-objects/cart-page");
const {
  isResultsTextVisible,
  isItemNo3Visible,
} = require("../page-objects/search-results-page");

describe("Add to Cart Functionality", () => {
  it("Opens the home page", () => {
    visitHomePage();
    isLogoVisible();
  });

  it("Navigate to cart details page", () => {
    clickOnCart();
  });

  it("Verify the basket empty message", () => {
    isBasketEmptyMessageVisible();
    enterProductNameAndSearch();
  });

  it("Verify search results and select item", () => {
    isResultsTextVisible();
    cy.get('[data-component-id="37"]').click();
    //TODO: Click on 3rd item
  });
});
