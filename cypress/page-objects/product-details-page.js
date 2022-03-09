const btnAddToCart = "#add-to-cart-button";
const btnSkipWarrantyCoverage = "#attachSiNoCoverage";
const BtnConfirmAddToCart = '[aria-labelledby="a-autoid-0-announce"]';

const clickOnAddToCartBtn = () => {
  cy.get(btnAddToCart).click();
};

const clickOnSkipWarrantyCoverageBtn = () => {
  cy.get(btnSkipWarrantyCoverage).click();
};

const clickOnConfirmCartBtn = () => {
  cy.get(BtnConfirmAddToCart).click();
};

module.exports = {
  clickOnAddToCartBtn,
  clickOnSkipWarrantyCoverageBtn,
  clickOnConfirmCartBtn,
};
