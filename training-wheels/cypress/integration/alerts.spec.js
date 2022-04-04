

it('Deve exibir uma mensagem de alerta', function(){
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Alerta').click()

    cy.on('window:alert', function(result){
        expect(result).to.equal('Isto é uma mensagem de alerta')
    })
})

it('Deve confirmar a solicitação', function(){
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Confirma').click()

    cy.on('window:confirm', () => true)

    cy.get('#result').should('have.text','Mensagem confirmada')
})

it('Deve cancelar a solicitação', function(){
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Confirma').click()

    cy.on('window:confirm', () => false)

    cy.get('#result').should('have.text','Mensagem não confirmada')
})

it('Deve exibir mensagem de boas vindas com o meu nome', function(){
    cy.visit('/javascript_alerts')

    cy.window().then(function($win){ // criado promessa para aguardar a entrada do prompt
        cy.stub($win, 'prompt').returns('Kevin')// substitui o prompt do navegador por um criado através do stub
        cy.contains('button', 'Prompt').click()
    })

    cy.get('#result').should('have.text','Olá, Kevin')
    
})