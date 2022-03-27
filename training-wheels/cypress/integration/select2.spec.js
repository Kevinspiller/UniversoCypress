

it('Deve selecionar uma única opção', function(){
    cy.visit('/apps/select2/index.html')

    cy.get('.select2-selection--single').click()
    cy.contains('.select2-results__option','Cypress').click()
})

it('Deve selecionar múltiplas opções', function(){
    cy.visit('/apps/select2/index.html')

    const frameworks = [ //array de massa de dados
        'Cypress',
        'Robot Framework',
        'Protractor'
    ]

    frameworks.forEach(function(framework){ //loop para utilizar a massa de dados no select multiplo
        cy.get('.select2-selection--multiple').click()
        cy.contains('.select2-results__option', framework).click()  
    })

})