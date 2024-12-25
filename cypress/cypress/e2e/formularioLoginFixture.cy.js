describe('Formulário de Login', () => {
    it.only('Deve acessar a página home', () => {
        cy.fixture('usuarios').then((usuario) => {
          cy.login(usuario[0].email, usuario[0].senha);
          cy.visit('/home');
          cy.url().should('include', '/home');
          cy.getByData('titulo-boas-vindas').should('contain','Bem vindo de volta!');
          cy.contains(usuario[0].nome).should('be.visible');
        });
      });

    // it.only colocando desta forma é principal, tirar .only no outros pra não executar
})