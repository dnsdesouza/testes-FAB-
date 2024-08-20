Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){

    cy.get('#firstName').type('Walmir');
    cy.get('#lastName').type('da Silva')
    cy.get('#email').type('walmir@silva.com')
    cy.get('#open-text-area').type('Teste comandos customizados')
    cy.contains('button', 'Enviar').click()

})