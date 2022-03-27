

it('Deve fazer o upload da minha foto',function(){
    cy.visit('/upload')

    const imageFile ='cypress/fixtures/kevin.jpg'

    cy.get('input[name=file]').selectFile(imageFile, {force:true})

    cy.get('input[value=Upload]').click()

    cy.get('img[src="/uploads/kevin.jpg"]', {timeout:7000})
        .should('be.visible')


})