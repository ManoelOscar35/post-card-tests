describe('My First Test', () => {
  it('Submit form and check post card', () => {
    cy.visit('/');

    // Submit post from
    cy.get('input[name="title"]').type('Post title');
    cy.get('textarea[name="body"]').type('Post body');

    cy.get('button[type="submit"]').click();

    // Check post card
    cy.get('.post').should('be.visible');
    cy.get('.post-title').should('contain', 'Post title');
    cy.get('.post-body').should('contain', 'Post body');
  })
})
