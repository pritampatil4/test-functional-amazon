const textResults = '//span[text()="RESULTS"]';

const isResultsTextVisible = () => {
  cy.xpath(textResults).should("be.visible");
};

const clickOnItemNo3 = () => {
  //clicking on 3rd item from the main search
  //removing target=_blank to open link in same tab
  cy.get(".s-main-slot")
    .children('[data-index="4"]')
    .contains("a")
    .invoke("removeAttr", "target")
    .click();
};

module.exports = { isResultsTextVisible, clickOnItemNo3 };
