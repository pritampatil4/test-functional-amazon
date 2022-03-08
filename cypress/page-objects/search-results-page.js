const textResults = '//span[text()="RESULTS"]';
const itemNo3 = '[data-index="4"]';

const isResultsTextVisible = () => {
  cy.xpath(textResults).should("be.visible");
};

const clickOnItemNo3 = () => {
  cy.get(itemNo3).click({ force: true });
};

module.exports = { isResultsTextVisible, clickOnItemNo3 };
