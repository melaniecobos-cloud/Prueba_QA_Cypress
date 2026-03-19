/// <reference types="cypress"/>

import RecruitmentPage from "../../../pages/RecruitmentPage"

describe("RECRUITMENT",()=>{
    beforeEach(()=>{
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })
    it("CREACIÓN DE CANDIDATO Y VACANTE",()=>{
        cy.fixture('data').then((data)=>{
            RecruitmentPage.goToRecruitment()
            RecruitmentPage.addCandidate(
                data.candidate.firstName,
                data.candidate.lastName,
                data.candidate.middleName,
                data.candidate.email,
                data.candidate.contact
            )
            RecruitmentPage.goToVacancies()
            RecruitmentPage.addVacancy()
        })
    })
})