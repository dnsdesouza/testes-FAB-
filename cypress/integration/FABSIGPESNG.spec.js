/// <reference types="Cypress" />


describe('TestAlfaFABSIGPESNG', function() {
    it('Fazer o login', function() {
        // Executa o login uma vez antes de todos os testes
        cy.visit('https://ng-app-portal.dev.rancher.ccarj.intraer/envolvimento-justica/');
        
       
        cy.get('#username').type('00000000000');
        cy.get('#password').type('12345');
        cy.get('#kc-login').click();
    });



    it('Escolhe o card e adiciona', function() {
        // Seleciona o card e realiza ações específicas
        
        cy.get(':nth-child(2) > .v-card').click();
        cy.get('.pa-5 > .v-btn > .v-btn__content').click();
    });



    it('Cadastro de delegacia', function() {  
        // Preenche os campos da delegacia
        cy.get('[data-test="sigla-delegacia"]').type('21° DP');
        cy.get('[data-test="nome-delegacia"]').type('21° DELEGACIA DE POLÍCIA DO CRUZEIRO');
        
        // Seleciona o primeiro item da lista dropdown
        cy.get('.v-col-2 > .v-input > .v-input__control > .v-field > .v-field__append-inner > .mdi-menu-down').click();
        cy.get('.v-list-item').eq(8).click();
    
        // Seleciona o segundo item da lista dropdown
        cy.get('.v-col-7 > .v-input > .v-input__control > .v-field > .v-field__append-inner > .mdi-menu-down').click();
        cy.get('.v-list-item').eq(6).click();
        
        // Verifica se o valor foi realmente selecionado (use parte do texto específico que deve aparecer)
        cy.get('.v-col-7 > .v-input > .v-input__control > .v-field').should('contain.text', 'ACOPIARA');
        
       //clicar no botão de cadastro/
        //cy.get('[data-test="cancelar-delegacia"]').click({ force: true });

        cy.get('[data-test="cadastrar-delegacia"]').click({ force: true });

        // Opcional: Adicione um wait curto se necessário
        cy.wait(1000); 
        
        cy.log('Teste finalizado');

       
    });
    
});
