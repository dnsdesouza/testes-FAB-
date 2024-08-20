/// <reference types="cypress" />

describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
       cy.visit('https://devfinance-agilizei.netlify.app/')

       cy.get('.success').should('be.visible')
    });
});