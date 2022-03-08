//Page Elements
const textBasketEmpty = '.sc-your-amazon-cart-is-empty';
const btnSearch = '#twotabsearchtextbox';

//Action Functions

const isBasketEmptyMessageVisible = () => {
    cy.get(textBasketEmpty).should('have.text', '\n\nYour Amazon Basket is empty\n\n')
}

const enterProductNameAndSearch = () => {
    cy.get(btnSearch).type('boAt Rockerz 400 Bluetooth On-Ear Headphone with Mic(Carbon Black){enter}');
}

module.exports = {isBasketEmptyMessageVisible, enterProductNameAndSearch}
