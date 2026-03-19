/// <reference types="cypress"/>

import LoginPages from "../../../pages/LoginPages"

describe("LOGIN TEST",()=>{
    it("INICIO DE SESIÓN CORRECTAMENTE",()=>{
        LoginPages.visit()        
        LoginPages.login('Admin','admin123')
        LoginPages.verifyDashboard()
    })
})