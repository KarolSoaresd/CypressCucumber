class LoginElements {
    botaoLogin = () => { return ':nth-child(2) > .profile-link__text' }

    botaoRecuperarSenha = () => { return '.login__form__forgot-password' }

    campoEmail = () => { return '#login-form > :nth-child(1) > .input'}

    campoSenha = () => { return '#password'}

    botaoConcluirLogin = () => { return '#login-button'}

    mensagemDeErro = () => { return '.input-password__container > .input-container > .pristine-error'}
}

export default LoginElements;