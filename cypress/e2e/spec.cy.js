describe('operator tests', () => {
  
  it('should multiply two numbers together', () => {
    cy.visit('calculator.html')
    cy.get('input[value="2"]').click()
    cy.get('input[value="5"]').click()
    cy.get('input[value="x"]').click()
    cy.get('input[value="5"]').click()
    cy.get('input[value="1"]').click()
    cy.get('input[value="="]').click()
    cy.get('#result').should('have.value', '1275')
  })

  it('should divide one number by another', () => {
    cy.visit('calculator.html')
    cy.get('input[value="9"]').click()
    cy.get('input[value="8"]').click()
    cy.get('input[value="6"]').click()
    cy.get('input[value="/"]').click()
    cy.get('input[value="2"]').click()
    cy.get('input[value="9"]').click()
    cy.get('input[value="="]').click()
    cy.get('#result').should('have.value', '34')
    
  }
  )
})