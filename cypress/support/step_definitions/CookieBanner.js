///<reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.rightmove.co.uk/";

Given(`the user is on the homepage`, () => {
  cy.visit(url);
});

When(`the cookie banner appears`, () => {
  cy.get("#onetrust-group-container").should("be.visible");
});
When(`the user accepts cookies`, () => {
  cy.get("#onetrust-accept-btn-handler").click();
});
When(`they refresh the page`, () => {
  cy.reload();
});
Then(`the cookie banner does not appear`, () => {
  cy.get("#onetrust-group-container").should("not.exist");
});
