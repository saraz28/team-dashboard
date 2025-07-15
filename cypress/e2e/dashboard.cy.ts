/// <reference types="cypress" />

describe('Team Page', () => {
  it('should visit the  page and see Team Dashboard', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Team Dashboard');
  });
});
