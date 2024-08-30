


it.only('testa a página da política de privacidade de forma independente', function(){
    //     cy.get ('#privace a')

 
        cy.visit('./src/privacy.html')
        cy.contains('Talking About Testing'). should('be.visible')
    

})


cy.get('[data-test]')
.each(($field) => {
    cy.wrap($field)
        .should('be.visible') // Verifica se o campo está visível
        .then(($el) => {
            let valor;
            
            // Verifica se o campo é do tipo 'input', 'textarea', ou 'select'
            if ($el.is('input, textarea')) {
                valor = $el.val(); // Obtém o valor para input e textarea
            } else if ($el.is('select')) {
                valor = $el.find('option:selected').text(); // Obtém o texto da opção selecionada para select
            } else if ($el.is('div.v-text-field')) {
                valor = $el.text().trim(); // Obtém o texto para div.v-text-field (ou outros tipos específicos)
            }

            // Loga o valor do campo ou uma mensagem se estiver vazio
            if (valor === undefined || valor.trim() === '') {
                cy.log(`O campo com data-test="${$el.attr('data-test')}" está vazio.`);
            } else {
                cy.log(`O valor do campo com data-test="${$el.attr('data-test')}" é: ${valor}`);
            }
        });
});
});







// <input readonly="" size="1" type="text" id="input-430" aria-describedby="input-430-messages" class="v-field__input" value="EDÍCULA"></input>