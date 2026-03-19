class BuzzPage{
    goToBuzz(){
        cy.contains('Buzz').click()
    }
    createPost(){
        cy.get('.orangehrm-buzz-create-post-actions > :nth-child(2)').click()
        cy.get('.orangehrm-buzz-post-modal-header-text > .oxd-buzz-post > .oxd-buzz-post-input').type('Post de Melanie')
        cy.get('.oxd-textarea--resize-vertical').click().type('https://youtu.be/1t31k1hTe9I?si=AbvrPXzWdspiotKt/')
        cy.wait(1000)
    }
    sortByMostCommented(){
        cy.contains('Most Commented').click()
        cy.wait(1000)
        
    }
    commentTopPost(){
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-buzz-post-footer > .orangehrm-buzz-post-actions > :nth-child(2) > .oxd-icon').click()
        cy.get(':nth-child(2) > .oxd-input').click().type('Muy de acuerdo a tu comentario.{enter}')
        cy.wait(1000)
    }
}
export default new BuzzPage()