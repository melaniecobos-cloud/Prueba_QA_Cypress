/// <reference types="cypress"/>

import PimPage from "../../../pages/PimPage"

describe("PIM",()=>{
    beforeEach(()=>{
        cy.loginSession()
        cy.visit('/web/index.php/dashboard/index')
    })
    it("Creación de Empleado",()=>{
        cy.fixture('data').then((data)=>{
            PimPage.goToPIM()
            PimPage.addEmployee()
            PimPage.fillEmployee(data.employee.firstName, data.employee.lastName)
            PimPage.uploadPhoto()
            PimPage.save()
        })
    })
})