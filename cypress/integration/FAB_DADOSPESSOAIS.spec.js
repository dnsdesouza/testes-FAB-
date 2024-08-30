/// <reference types="Cypress" />

describe('TestAlfaFABSIGPESNG', function() {

    beforeEach(function() {
        cy.visit('https://ng-app-portal.dev.rancher.ccarj.intraer/dados-pessoais/dados-cadastrais');

        cy.get('#username').type('00000000000');
        cy.get('#password').type('12345');
        cy.get('#kc-login').click();

        cy.url().should('include', '/dados-pessoais/dados-cadastrais');
        cy.get('[value="2"] > .v-btn__content').click();

        cy.wait(2000);
    });

    it('Mostrar o valor do atributo value de todos os campos com seus labels', function() {
        cy.get('input').each(($input) => {
            const id = $input.attr('id');

            // Se o id estiver presente, busque o label associado
            if (id) {
                cy.get(`label[for="${id}"]`)
                    .invoke('text')
                    .then((labelText) => {
                        // Limpa e ajusta o texto do label
                        const labelLimpo = labelText.trim().replace(/\s{2,}/g, ' ');
                        
                        // Remove caracteres indesejados ou strings extras
                        const labelFinal = labelLimpo.replace(/(?:[^\w\s]|_)+/g, '').trim();
                        
                        // Obtém o valor do atributo value do input
                        cy.wrap($input)
                            .invoke('attr', 'value')
                            .then((valor) => {
                                if (valor === undefined || valor === null) {
                                    valor = 'Valor não definido';
                                }
                                cy.log(`O campo ${labelFinal} é: ${valor}`);
                            });
                    });
            } else {
                // Caso o id não esteja presente, apenas registra o valor
                cy.wrap($input)
                    .invoke('attr', 'value')
                    .then((valor) => {
                        if (valor === undefined || valor === null) {
                            valor = 'Valor não definido';
                        }
                        cy.log(`O campo sem label é: ${valor}`);
                    });
            }
        });
    });

    it.only('Realiza uma edição e retorna para validar', function() {
        // Garante que o botão Alterar seja visível e clicável
        cy.get('[data-test="Alterar"]').should('be.visible').click();
        cy.wait(2000);
    
        // Seleciona o campo e edita o valor
        // cy.get('[data-test="cep"]')
        //     .should('be.visible')
        //     .click({ force: true }) // Força o clique para tornar o campo editável se necessário
        //     .type('{selectall}{backspace}70657489'); // Apaga o valor existente e digita o novo valor


        const itemIndex = 6;
      // Abre o dropdown e aguarda a renderização dos itens
        cy.get('[data-test="idTipoImovel"]')
        .should('be.visible')
        .click();

        // Aguarda até que a lista de itens esteja visível
        cy.get('.v-list')
            .should('be.visible') 
            .find('.v-list-item') 
            .eq(itemIndex)
            .click({ force: true }); 


            cy.get('[data-test="idPais"]')
            .should('be.visible')
            .clear() // Limpa o valor atual
            .click(); // Abre a lista de seleção
          
          // Aguarda até que a lista de itens esteja visível
          cy.get('.v-list')
            .should('be.visible')
            .find('.v-list-item') 
            .first() // Seleciona o primeiro item da lista
            .click({ force: true }); // Clica no item, forçando o clique se necessário
            
            

        cy.get('[data-test="idEstado"]')
            .should('be.visible')
            .click();

            // Aguarda até que a lista de itens esteja visível
        cy.get('.v-list')
            .should('be.visible') 
            .find('.v-list-item') 
            .eq(6)
            .click({ force: true });     


        cy.wait(1000);
        cy.get('[data-test="idMunicipio"]')
            .should('be.visible')
            .click();

        // Aguarda até que a lista de itens esteja visível
        cy.get('.v-list')
            .should('be.visible') 
            .find('.v-list-item') 
            .eq(7)
            .click({ force: true });
            
 

        cy.wait(1000);
        cy.get('[data-test="idBairro"]')
            .should('be.visible')
            .click();

        // Aguarda até que a lista de itens esteja visível
        cy.get('.v-list')
            .should('be.visible') 
            .find('.v-list-item') 
            .eq(itemIndex)
            .click({ force: true });


        cy.wait(1000);
        cy.get('[data-test="idTipoLogradouro"]')
            .should('be.visible')
            .click();

        // Aguarda até que a lista de itens esteja visível
        cy.get('.v-list')
            .should('be.visible') 
            .find('.v-list-item') 
            .eq(itemIndex)
            .click({ force: true });

        


        // Clique no botão Salvar
        cy.get('[data-test="Salvar"]').should('be.visible').click();
    
        // Aguarda algum tempo para garantir que a edição foi salva
        cy.wait(2000);
    
      
        // Verifica o valor no <input> diretamente
        // cy.get('#input-82')
        // .should('be.visible')
        // .invoke('val') // Usa 'val' para obter o valor do campo input
        // .should('equal', '70657-489'); // Verifica se o valor é o esperado
        });
    });
    

