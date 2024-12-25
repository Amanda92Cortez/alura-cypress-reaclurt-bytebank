describe('Formulário de Login', () => {
    // beforeEach( () => {
        // cy.visit('http://localhost:3000/')
        // cy.login('alura@alura.com', '1234')
    // })

    it.only('Deve acessar a pagina home', () => {
        cy.login('alura@alura.com', '1234')
        cy.visit('/home')
        cy.get('.Principal_titulo__2XY1a').should('contain', 'Bem vindo de volta!')
    })

    it('Não deve permitir um email inválido', () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('alura@alura')
        cy.getByData('senha-input').type('1234')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O email digitado é inválido')
    })

    it('Não deve permirit um campo email vazio', () => {
        cy.getByData('botao-login').click()
        // cy.getByData('email-input').type('')
        cy.getByData('senha-input').type('1234')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo email é obrigatório')
    })
    // it.only colocando desta forma é principal, tirar .only no outros pra não executar
})