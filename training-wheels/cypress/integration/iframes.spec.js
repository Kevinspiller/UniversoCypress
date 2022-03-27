
const niceIFrame = function(){
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

it('Deve validar o total de seguidores',function(){
    cy.visit('/nice_iframe')

    niceIFrame().find('.FollowerCountText')
    .should('have.text','6,447 followers')
})