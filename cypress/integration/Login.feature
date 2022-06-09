Feature: Login site CWI

    Scenario: Visualizar opção de recuperar senha esquecida
        Given acesso o site CWI
        When acesso a pagina de login
        Then devo visualizar botao de recuperar senha esquecida

    Scenario: Visualizar mensagem de usuario e senha invalidos
        Given acesso o site CWI
        When acesso a pagina de login
        And insiro email email e senha
        Then visualizo mensagem de usuario ou senha invalidos

    