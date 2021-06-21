class LoginPage {
    loginButton() { return cy.get('ul:nth-child(2) li:nth-child(1) a') }
    emailInput() { return cy.get('input#email') }
    passwordInput() { return cy.get('input#password') }
    submitLoginButton() { return cy.get('button.sel_login') }

    loginFlow(username, password) {
        this.loginButton().click()
        this.emailInput().type(username)
        this.passwordInput().type(password)
        this.submitLoginButton().click()
    }
}

export default new LoginPage()
