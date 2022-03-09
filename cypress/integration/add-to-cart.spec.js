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
  clickOnItemNo3,
} = require("../page-objects/search-results-page");

const {
  clickOnAddToCartBtn,
  clickOnSkipWarrantyCoverageBtn,
  clickOnConfirmCartBtn,
} = require("../page-objects/product-details-page");

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
    clickOnItemNo3();
  });

  it("Verify adding item to cart", () => {
    clickOnAddToCartBtn();
    clickOnSkipWarrantyCoverageBtn();
    clickOnConfirmCartBtn();
  });
});
