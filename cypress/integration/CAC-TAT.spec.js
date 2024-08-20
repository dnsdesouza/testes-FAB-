/// <reference types="Cypress" />

describe('Central de Atendimento', function() {

    beforeEach(function() {
        cy.visit('./src/index.html')
    })


    it('Verifica o título', function(){
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
  

    it('preenche os campos obrigatorioas ', function(){
        const longText = 'Texto texto texto texto texto texto texto texto, texto texto texto texto texto texto texto texto texto texto texto texto texto, texto texto texto texto texto'
        cy.get('#firstName').type('Walmir');
        cy.get('#lastName').type('da Silva')
        cy.get('#email').type('walmir@silva.com')
        cy.get('#open-text-area').type(longText , {delay: 0})
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('Campo telefone continua vazio só aceita número', function(){
        cy.get('#phone')
        .type('asdddskldkfd')
        .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido' , function(){
          const longText = 'Texto texto texto texto texto texto texto texto, texto texto texto texto texto texto texto texto texto texto texto texto texto, texto texto texto texto texto'
        cy.get('#firstName').type('Walmir');
        cy.get('#lastName').type('da Silva')
        cy.get('#email').type('walmir@silva.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type(longText , {delay: 0})
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName')
            .type('Walmir')
            .should('have.value', 'Walmir')
            .clear()
            .should('have.value', '')

    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })


    it('envia o formuário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')

    })

    it.only('seleciona um produto (YouTube) por seu texto', function(){
    //   cy.get('#product').select(2)
    //   cy.get('#product')
      cy.get('#product')
            .select('Cursos')
            .should('have.value','cursos')
    })

})





    // it.only('verifica o título da aplicação', function() {
    //     cy.visit('https://ng-app-portal.dev.rancher.ccarj.intraer/envolvimento-justica/');
        
    //     cy.get('#username').type('15645097700');
    //     cy.get('#password').type('12345');
    //     cy.get('#kc-login').click();
  
    //     cy.get(':nth-child(2) > .v-card').click()
    //     cy.get('.pa-5 > .v-btn > .v-btn__content').click();
        
    //     cy.get('#input-21').type('21° DP')
    //     cy.get('#input-23').type('21° DELEGACIA DE POLÍCIA DO CRUZEIRO')
 
    // });
    




     
    

  