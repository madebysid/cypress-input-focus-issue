describe('Inputs', () => {
  beforeEach(() => {
    cy.visit('./index.html')
  })

  it('can type in a number field correctly', () => {
    cy.wait(2000) // Only for demonstration, this isn't actually needed for reproduction

    cy.get('button').click()

    cy.wait(2000) // Only for demonstration, this isn't actually needed for reproduction

    cy.get('input').should('exist')

    cy.get('input').type('2')
    cy.get('input').should('have.value', '12')
  })
})
