describe('template spec', () => {
  it('should add numbers together', () => {
    //open calculator.html file 
    cy.visit('calculator.html')
    //query for a number button 
    cy.get('input[value="5"]')
    .click()
    //query for a number button 
    cy.get('input[value="6"]')
    .click()
    //query for a + button 
    cy.get('input[value="+"]')
    .click()
    //query for a number button 
    cy.get('input[value="7"]')
    .click()
    //query for a number button 
    cy.get('input[value="8"]')
    .click()
    //query for a = button
    cy.get('input[value="="]')
    .click()
    //query for input result
    cy.get('#result').should('have.value', '134')
  })


it('should subtract one number from another ', () => {
  //open calculator.html file 
  cy.visit('calculator.html')
  //query for a number button 
  cy.get('input[value="9"]')
  .click()
  //query for a number button 
  cy.get('input[value="8"]')
  .click()
  //query for a - button 
  cy.get('input[value="-"]')
  .click()
  //query for a number button 
  cy.get('input[value="4"]')
  .click()
  //query for a number button 
  cy.get('input[value="3"]')
  .click()
   //query for a = button 
  cy.get('input[value="="]')
  .click()
   //query for input result
  cy.get('#result').should('have.value', '55')
})
})