describe('Cadastro de Login', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000/');
    })

    it('No cadastro não deve permirit um campo senha vazia', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('email-input').type('teste@alura.com')
        // cy.getByData('senha-input').type('1234')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo de senha é obrigatório')
    })

    it.only('No cadastro não deve permirit um campo nome vazio', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('email-input').type('teste@alura.com')
        cy.getByData('senha-input').type('1234')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo de nome é obrigatório')
    })

    it('Realizando o cadastro de usuário com sucesso', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('Gui Lima')
        cy.getByData('email-input').type('gui@email.com')
        cy.getByData('senha-input').type('456789')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    })

    it('Realizando o cadastro de usuário existente', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('Gui Lima')
        cy.getByData('email-input').type('gui@email.com')
        cy.getByData('senha-input').type('456789')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'E-mail já cadastrado!')
    })


    // it.only colocando desta forma é principal, tirar .only no outros pra não executar
})