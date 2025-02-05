describe("Prose Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the slot content", () => {
    cy.get("div.prose")
      .should("exist")
      .within(() => {
        cy.contains(
          "I am a full stack developer with a passion for creating visual experiences that captivate and inspire."
        ).should("exist");
      });
  });

  it("should have correct CSS classes applied", () => {
    cy.get("div.prose")
      .should("have.class", "prose")
      .should("have.class", "prose-ul:-mt-4")
      .should("have.class", "prose-h3:-mt-2");
  });
});
