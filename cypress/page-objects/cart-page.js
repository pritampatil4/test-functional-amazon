//Page Elements
const textBasketEmpty = '.sc-your-amazon-cart-is-empty';
const btnSearch = '#twotabsearchtextbox';
const btnItemDelete = '[data-action="delete"][type="submit"]';

//Action Functions

const isBasketEmptyMessageVisible = () => {
    cy.get(textBasketEmpty).should('have.text', '\n\nYour Amazon Basket is empty\n\n')
}

const enterProductNameAndSearch = () => {
    cy.get(btnSearch).type('boAt Rockerz 400 Bluetooth On-Ear Headphone with Mic(Carbon Black){enter}');
}

const clickOnItemDeleteBtn = () => {
    cy.get(btnItemDelete).click();
}

module.exports = {isBasketEmptyMessageVisible, enterProductNameAndSearch, clickOnItemDeleteBtn}
