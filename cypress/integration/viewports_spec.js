describe('Test Viewports', () => {
  const sizes = ['iphone-6', 'iphone-x', [1440, 920]];

  sizes.forEach((size) => {
    it(`should display something on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit('/');
      cy.contains('Home View').should('be.visible');
    });
  });
});
