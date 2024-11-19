describe('Fetching JSON', () => {

  beforeEach(() => {
    cy.visit("index.html")
  })

  it('Fetch JSON from file', () => {
    cy.wait(1000)
    //Klicka på Get JSON from file button
    cy.get("#btnJson").click()

    cy.wait(1000)
    //Kontrollera värdet i nameOutput
    //Cypress inväntar Async funktionallitet automatiskt
    cy.get("#nameOutput").should("contains.text", "Marcus")
    cy.wait(1000)
  })

  it('Fetch JSON from ISS API', () => {
    //Klicka på Get JSON from file button
    cy.wait(1000)
    cy.get("#btnIss").click()

    //Kontrollera värdet i nameOutput
    //Cypress inväntar Async funktionallitet automatiskt
    cy.wait(1000)
    cy.get("#nameOutput").should("contains.text", "iss")

    cy.wait(1000)
  })
})