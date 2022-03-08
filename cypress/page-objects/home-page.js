//Page Elements
const baseUrl = 'https://www.amazon.in';
const logo = '#nav-logo-sprites';
const btnCart = '#nav-cart';

//Action Functions
const visitHomePage = () => {
  cy.visit(baseUrl);
}

const  isLogoVisible = () => {
  cy.get(logo).should('be.visible');
}

const clickOnCart = () => {
  cy.get(btnCart).click();
}

module.exports = { visitHomePage, isLogoVisible, clickOnCart };
