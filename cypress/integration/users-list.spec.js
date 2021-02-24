import { results } from '../fixtures/users/users.json';

describe('User List', () => {
  it('shows the user list', () => {
    cy.intercept('GET', 'https://randomuser.me/api/?results=*', { fixture: 'users/users.json' }).as('users');

    cy.visit('/users');

    results.map(({ login }) => {
      cy.contains(login.username);
    });
  });
});
