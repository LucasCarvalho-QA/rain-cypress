describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://employer.rain.us/#/login')
    })

    const email = 'fake@email.com'
    const password = '123@567Rain?.'
    const messageValidation_WrongEmailOrPassword = 'Could not sign in, invalid email or password'
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    it.skip('Authentication - Login - Wrong e-mail and password', () => {
        cy.get('#field-2').type(email).should('have.value', email)
        cy.get('#field-3').type(password)
        cy.get('.css-1rzutw8').click()
        cy.get('span').should('contain', messageValidation_WrongEmailOrPassword)
    })

    it.skip('Authentication - Forgot password - Create a new password with invalid confirmation code', () => {
        cy.get('.chakra-input__right-element > .chakra-button').click()
        cy.get('#field-4').type(email).should('have.value', email)
        cy.get('.css-16t9v0m').click()
        
        var pin = getRandomInt(0,9)
        for (var i = 0; i < 6; i++) {
            cy.get('#pin-input-5-'+i).type(pin).should('have.value', pin)
        }

        cy.get('.css-8ao06w').click()
        cy.get('#field-6').type(password)
        cy.get('.css-8ao06w').click()
        cy.get('span').should('contain', 'The code provided is invalid, please verify your email and try again')        
    })

    it('Authentication - Forgot password - Create a new password with weak parameters', () => {
        cy.get('.chakra-input__right-element > .chakra-button').click()
        cy.get('#field-4').type(email).should('have.value', email)
        cy.get('.css-16t9v0m').click()
        
        var pin = getRandomInt(0,9)
        for (var i = 0; i < 6; i++) {
            cy.get('#pin-input-5-'+i).type(pin).should('have.value', pin)
        }

        cy.get('.css-8ao06w').click()
        cy.get('#field-6').type('12345678').blur()

        cy.get('#field-6-feedback').contains('Password must contain uppercase characters')
        cy.get('.css-8ao06w').should('be.disabled')
    })
})