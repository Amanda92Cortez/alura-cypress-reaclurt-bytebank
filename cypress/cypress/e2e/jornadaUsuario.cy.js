

describe('Jornadas de usuário', () => {
    it('Usuaário deve permitir o acesso da aplicação, realize uma transação e faça login', {browser: 'edge'}, () => {
        cy.visit('/')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        
        cy.location('pathname').should('eq','/home')
    
        cy.getByData('select-opcoes').select('Transferência')
        // cy.getByData('select-opcoes').select('Depósito')
        cy.getByData('form-input').type('80')
        cy.getByData('realiza-transacao').click()
        
        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80')
        // cy.getByData('lista-transacoes').find('li').last().contains(' R$ 480')
        
        cy.getByData('botao-sair').click()
        cy.location('pathname').should('eq','/')
        // cy.location('pathname').should('eq', '/home/cartoes')
    })
    
  });