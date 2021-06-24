import loginPage from '../page_objects/login.page'
import homePage from '../page_objects/home.page'
import { TODOIST_BASE_URL, TODOIST_EMAIL, TODOIST_PASSWORD } from '../utils/constants'

const expectedHeader = 'Today'

describe('Todoist - Login Tests', () => {
    it('Login - Happy Path', () => {
        cy.visit(TODOIST_BASE_URL)
        loginPage.loginFlow(TODOIST_EMAIL, TODOIST_PASSWORD)

        cy.url()
            .should('include', '/app/today')
        
        homePage.todayHeader()
            .should('have.text', expectedHeader)
    })
})
