import estilo from './FormRegistro.module.scss'

export default function FormRegistro() {
    return (
        <form className={estilo.form}>
            <div className={estilo.info}>
                <label htmlFor="">Nome de Usuário</label>
                <div className={estilo.backgroundinput}>
                    <input type="text" placeholder="Escolha um nome de usuário"/>
                </div>
            </div>
            <div className={estilo.info}>
                <label htmlFor="">Senha</label>
                <div className={estilo.backgroundinput}>
                    <input type="password" placeholder="Digite a sua senha"/>
                </div>
            </div>
            <div className={estilo.info}>
                <label htmlFor="">Confirmação de senha</label>
                <div className={estilo.backgroundinput}>
                    <input type="password" placeholder="Por favor, confirme a sua senha"/>
                </div>
            </div>
            <div className={estilo.info}>
                <label htmlFor="">Email</label>
                <div className={estilo.backgroundinput}>
                    <input type="text" placeholder="Por favor, digite o seu email"/>
                </div>
            </div>
            <button>Registrar</button>
            <div className={estilo.separate}></div>
            <div className={estilo.login}><a href="/login">Já possui uma conta?</a></div>
        </form>
    )
}