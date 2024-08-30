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
        cy.get('#phone-checkbox').check()
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

    it('seleciona um produto (YouTube) por seu texto', function(){
         //   cy.get('#product')
        //   cy.get('#product').select(2) //pelo indice

      cy.get('#product')
            .select('Cursos')
            .should('have.value','cursos')

    })

    it('marca o tipo de atendimento "Feedback"', function(){
        cy.get('input [type="radio"], [value="feedback"]')
        .check()
        .should('have.value', 'feedback')

    })

    it('marca cada tipo de atendimento', function(){
        cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(function($radio){
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')

        })
    })

    
    it('marca ambos os check box e depois desmarca', function(){
        cy.get('input[type="checkbox"]')
        .check().should('be.checked')
        .last().uncheck()
        .should('not.be.checked')
    })

    it('seleciona um arquivo da pasta fixtures', function(){
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json')//para o drag drop>>>> como segundo parametro,{action: 'drag-drop'}
        .should(function($input){
            console.log($input)
            expect($input[0].files[0].name).to.equal("example.json")
        })
    })



    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]')
        .selectFile('@sampleFile')
          .should(function($input){
            console.log($input)
            expect($input[0].files[0].name).to.equal("example.json")
        })

    })


    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })
    

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function(){
        cy.get ('#privacy a')
        .invoke('removeAttr', 'target')
        .click();

       cy.contains('Talking About Testing').should('be.visible')
    })

 
 
})