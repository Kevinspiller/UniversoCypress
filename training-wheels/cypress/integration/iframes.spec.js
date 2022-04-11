
const niceIFrame = function(){
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

it('Deve validar o nome do perfil',function(){
    cy.visit('/nice_iframe')

    niceIFrame().find('.UsernameText')
    .should('have.text','qa.ninja')
})