/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site CWI", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

Then("devo visualizar botao de recuperar senha esquecida", () => {
    loginPage.visualizarBotaoRecuperarSenha();
})

And("insiro email email e senha", () => {
    loginPage.inserirEmail();
    loginPage.inserirSenha();
    loginPage.clicarParaLogar();
}) 

Then("visualizo mensagem de usuario ou senha invalidos", () => {
    loginPage.visualizarMensagemDeErro();
})