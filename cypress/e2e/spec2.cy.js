describe('Testing Clear and Decimal buttons', () => {
  
	it('Clear button should clear current number', () => {
		cy.visit('calculator.html')
		cy.get('input[value="1"]').click();
		cy.get('input[value="9"]').click();
		cy.get('.clear').click();      
		cy.get('#result').should('have.value', '0')
	})

	it('Clear button should not clear entire operation', () => {
		cy.visit('calculator.html');
		cy.get('input[value="4"]').click();
		cy.get('input[value="7"]').click();
		cy.get('input[value="+"]').click();
		cy.get('input[value="2"]').click();
		cy.get('.clear').click();   
		cy.get('input[value="5"]').click();   
		cy.get('input[value="="]').click();
		cy.get('#result').should('have.value', '52');
	})
  
	it('Decimal button adds (only 1) decimal point', () => {
		cy.visit('calculator.html');
		cy.get('input[value="8"]').click();
		cy.get('input[value="9"]').click();
		cy.get('#decimal').click();
		cy.get('#decimal').click();
		cy.get('#decimal').click();
		cy.get('input[value="7"]').click();
		cy.get('#decimal').click();
		cy.get('#result').should('have.value', '89.7');
      
	})
})