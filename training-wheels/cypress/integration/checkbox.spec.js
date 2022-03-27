


it('Deve marcar os top 5 filmes da Marvel', function () {

    cy.visit('/checkboxes')

    const movies = [
        'cap',
        'ironman',
        'guardians',
        'guardians2',
        'spider3'
    ]

    movies.forEach(function(m){ //interpolar e concatenar
        cy.get(`input[name=${m}]`)
        .click()
        .should('be.checked')
    })

})