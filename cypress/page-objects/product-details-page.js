const btnAddToCart = "#add-to-cart-button";
const btnSkipWarrantyCoverage = "#attachSiNoCoverage";
const btnConfirmAddToCart = '[aria-labelledby="a-autoid-0-announce"]';
const textItemInCart = '#nav-cart-count';

const clickOnAddToCartBtn = () => {
  cy.get(btnAddToCart).click();
};

const clickOnSkipWarrantyCoverageBtn = () => {
  cy.get(btnSkipWarrantyCoverage).click();
};

const clickOnConfirmCartBtn = () => {
  cy.get(btnConfirmAddToCart).click();
};

const expectItemsInTheCart = (itemsCount) => {
    cy.get(textItemInCart).should('have.text', itemsCount)
}


module.exports = {
  clickOnAddToCartBtn,
  clickOnSkipWarrantyCoverageBtn,
  clickOnConfirmCartBtn,
  expectItemsInTheCart,
};
