///<reference types="cypress"/>

import BuzzPage from "../../../pages/BuzzPage"

describe("BUZZ",()=>{
    beforeEach(()=>{
        cy.loginSession()
        cy.visit('/web/index.php/buzz/viewBuzz')
    })
    it("CREAR POST Y COMENTARIO",()=>{
        BuzzPage.goToBuzz()
        BuzzPage.createPost()
        BuzzPage.sortByMostCommented()
        BuzzPage.commentTopPost()
    })
})