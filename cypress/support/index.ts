import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      getBySel(selector: string): Chainable<JQuery<HTMLElement>>;
      getBySelLike(selector: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
