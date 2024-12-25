describe('Realizando requisições para a API',()=>{
        context('GET /users',()=>{
            it('Deve retornar uma lista de usuários', ()=>{
            cy.request({
                method: 'GET',
                url: 'http://localhost:8000/users',
            }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body).length.to.be.greaterThan(1)         
                })
            })
        }); // Fim primeiro context

      context('GET /users/:userId', () => {
        it('Deve retornar único usuario', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:8000/users/f6c5efcd-4591-49cd-a69e-d7892d90f651',
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('nome')
            })
        })  

        it('Deve retornar um erro quando o usário for inválido', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:8000/users/f6c5efcd-4591-49cd-a69e',
                failOnStatusCode: false, 
            }).then((response) => {
                expect(response.status).to.eq(404)
                expect(response.body).to.eq('Not Found')
            })
        })
      }); // Fim segundo context

    //   context('Interceptando solicitações de rede', () =>{
    //     it('Deve fazer a interceptação do POST users/login', () => {
    //         cy.intercept('POST','users/login').as('loginRequest')
    //         cy.login('alura@alura.com', '1234')
    //         cy.wait('@loginRequest').then(interception => {
    //             interception.response = {
    //                 statusCode: 200,
    //                 body: {
    //                     sucess: true,
    //                     message: 'Login bem sucedido!'
    //                 }
    //             }
    //         })
    //         // cy.visit('/home')
    //         cy.get('.Principal_titulo__2XY1a').should('contain.text', 'Bem vindo de volta!')
    //     })
    //   })// Fim terceiro context
}) // Fim describe