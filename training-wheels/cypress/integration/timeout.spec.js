

it('Exemplo de timout',function(){
    cy.visit('/timeout')
    
    cy.contains('button', 'Habilita').click()

    //cy.wait(7000) //wait espera sempre 7 segundos

    cy.get('#firstname')
        .should('be.visible')
        .type('Kevin',{timeout: 7000}) //timeout: até 7 segundos para executar
})