// - [ ]  Get the `Name` input and type a name in it.
// - [ ]  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// - [ ]  Get the `Email` input and type an email address in it
// - [ ] Get the `password` input and type a password in it
// - [ ]  Set up a test that will check to see if a user can check the terms of service box
// - [ ] Check to see if a user can submit the form data
// - [ ] Check for form validation if an input is left empty


describe('filling out the form and submitting it', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })

    it('submit button is disabled', () => {
        cy.get('button').should('be.disabled')
    })

    it('can get the Name input and type a name in it', () => {
        cy.get('input[name="name"]')
            .type('Dee')
            .should('have.value', 'Dee')
    })

    
    it('can get the Email input and type an email address in it', () => {
        cy.get('input[name="email"]')
            .type('dee@email.com')
            .should('have.value', 'dee@email.com')
    })

    
    it('can get the Password input and type a password in it', () => {
        cy.get('input[name="password"]')
            .type('abcdef')
            .should('have.value', 'abcdef')
    })

    it('can check the terms of service checkbox', () => {
        cy.get('input[name="termsOfService"]')
            .check()
            .should('have.value', 'on')
    })

    it('submit button is not disabled', () => {
        cy.get('button').should('not.be.disabled')
    })

    it('can submit a filled out form', () => {
        cy.get('button').click()
        cy.get('.App').contains('Dee')
    })
})

describe('check form validation if input is filled out incorrectly', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })

    it('can get the Email input and type an incomplete email address in it', () => {
        cy.get('input[name="email"]')
            .type('dee@email')
            .should('have.value', 'dee@email')
    })

    it('shows validation error when input is filled out incorrectly', () => {
        cy.get('.form-errors')
    })

})



