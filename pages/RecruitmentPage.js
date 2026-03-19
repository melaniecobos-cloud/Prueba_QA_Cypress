class RecruitmentPage{
    goToRecruitment(){
        cy.visit('/web/index.php/recruitment/viewRecruitmentModule')
    }
    addCandidate(firstName, lastName, middleName, email,contact){
        cy.contains('Add').click()
        cy.get('[name="firstName"]').type(firstName)
        cy.get('[name="middleName"]').type(middleName)
        cy.get('[name="lastName"]').type(lastName)
        cy.wait(1000)
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        cy.wait(1000)
        cy.get('[placeholder="Type here"]').first().type(email)
        cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(contact)
        cy.wait(1000)
        cy.get('.oxd-file-input-div').contains('No file selected').click()
        cy.get('input[type=file]').selectFile('cypress/fixtures/VACANTE.docx',{force:true})
        cy.get('.oxd-checkbox-input > .oxd-icon').click()
        cy.contains('Save').click()
    }
    goToVacancies(){
        cy.contains('Vacancies').click()
        cy.wait(2000)
    }
    addVacancy(){
        cy.contains('Add').click()
        cy.get('.oxd-form > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').first().type('QA Tester')
        cy.wait(1000)
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(20)').click()
        cy.wait(1000)
        cy.get('.oxd-autocomplete-text-input > input').type('Melanie QA')
        cy.get('.oxd-autocomplete-option').contains('Melanie QA').click()
        cy.wait(1000)
        cy.contains('Save').click()
    }

}
export default new RecruitmentPage()