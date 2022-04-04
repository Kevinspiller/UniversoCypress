

it('Deve exibir 7 séries no total', function(){
    cy.visit('/tables')

    cy.get('table tbody tr')
        .then(function(series){
            expect(series).to.have.length(7)
        })
})

it('Deve exibir a série the witcher', function(){
    cy.visit('/tables')

    cy.contains('table tbody tr', 'The Witcher')
        .then(function(item){
            expect(item).to.contain('Netflix')
            expect(item).to.contain('Netflix')
            expect(item).to.contain('2019') 
        })
})

it('Deve remover a serie Supernatural', function(){
    cy.visit('/tables')

    cy.contains('table tbody tr', 'Supernatural')
        .then(function(item){
            item.find('.delete').trigger('click')
        })
        .should('not.exist')

        cy.get('table tbody tr')
        .then(function(series){
            expect(series).to.have.length(6)
        })
})