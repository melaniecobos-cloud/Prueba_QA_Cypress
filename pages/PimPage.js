class PimPage{
    goToPIM(){
        cy.visit('/web/index.php/pim/viewEmployeeList')
    }
    addEmployee(){
        cy.get('.oxd-topbar-body-nav-tab-item').contains('Add Employee').click()
    }
    fillEmployee(firstName, lastName){
        cy.get('[name="firstName"]').type(firstName)
        cy.get('[name="lastName"]').type(lastName)
    }
    uploadPhoto(){
        cy.get('.oxd-file-div > .oxd-icon-button')
        cy.get('input[type=file]').selectFile('cypress/fixtures/foto.jpg',{force:true})
    }
    save(){
        cy.contains('Save').click()
    }
}
export default new PimPage()
