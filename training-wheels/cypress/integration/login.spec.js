/* Para pegar class ao inspecionar html:
- class^ = "texto" começa com
- class* = "texto" contém
- class$ = "texto" termina com
Ex.: h3[class^="title"] */

it('Deve logar com sucesso', function(){
    cy.visit('/login') //visitar página de login

    cy.get('#nickId').type('papitorocks') //pegar campo de nick
    cy.get('#passId').type('pwd123') //pegar campo de senha

    cy.get('button[type=submit]').click()

    cy.get('h3[class^="title"]')
        .should('have.text','Olá Papito, bem-vindo ao Orkut')

    const expectedText = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'

    cy.get('p[class=subheader]')
        .should('have.text', expectedText)
    
})