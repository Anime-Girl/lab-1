describe("Cypress", () => {
    it("Working", () => {
        expect(true).to.equal(true)
    })

    it("App is ok", () => {
        cy.visit('/')
    })
})