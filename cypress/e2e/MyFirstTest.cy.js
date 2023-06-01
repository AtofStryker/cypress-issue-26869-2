describe("Microsoft Azure Authentication (webapp)", () => {
  it("logs into login.microsoftonline through a user web app", () => {
    cy.visit("https://www.microsoft.com/en-in/");
    cy.get("#mectrl_headerPicture").click();
    cy.get('input[type="email"]').type(Cypress.env("aad_username"));
    cy.get('input[type="submit"]').click();
    // });
  });
});
