import { time } from "systeminformation"

class LoginPage{
    visit(){
        cy.visit('/')
    }
    login(username, password){
        cy.get('[placeholder="Username"]').type(username)
        cy.get('[placeholder="Password"]').type(password)
        cy.get('button[type="submit"]').click()
    }
    verifyDashboard(){
        cy.url().should('include','dashboard')
        cy.wait(1000)
    }
}
export default new LoginPage()