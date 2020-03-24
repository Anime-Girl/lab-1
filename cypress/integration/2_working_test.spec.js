import chaiColors from 'chai-colors'
chai.use(chaiColors)

describe('Accepts input', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it("Field string refreshing", () => {
        const input = '#123bb3'
        cy.get("input").type(input).should("have.value", input)
    })

    it("Button clickable", () => {
        cy.get("button").click()
    })

    it("CMYK and rectangle color", () => {
        const input = '#123bb3'
        cy.get("input").type(input).should("have.value", input)
        cy.get("button").click()
        cy.get('.rectangle').should('have.css', 'background-color').and('be.colored', '#123bb3')
    })

})