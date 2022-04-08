import config from '../../../src/cypress.config';
import { aliasQuery } from '../../utils/graphql-test';

beforeEach(() => {
  cy.intercept('POST', Cypress.env('graphql_url'), (req) => {
    aliasQuery(req, 'Example');
  });
});

describe('Example title', () => {
  it('example description', () => {
    cy.visit(config.url);
  });

  it('example graphql description', () => {
    cy.wait('@gqlExampleQuery')
      .its('response.body.data.example')
      .should('have.property', 'example');
  });
});
