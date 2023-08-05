import estilo from "./Form.module.scss";

export default function Form(){
    return(
        <>
            <h2 className={estilo.titulo}>Log in</h2>
            <form action="" className={estilo.form}>
                <label htmlFor="" className={estilo.label}>Nome de Usuário</label>
                <div className={estilo.inputspace}>
                    <input type="text" placeholder="Digite seu nome de usuário" className={estilo.input}/>
                </div>
                <label htmlFor="" className={estilo.label}>Senha</label>
                <div className={estilo.inputspace}>
                    <input type="password" placeholder="Digite sua senha" className={estilo.input}/>
                </div>
                <button>Log in</button>
                <div>
                    <div></div> Ou <div></div>
                </div>
                <button>Registre-se</button>
                <div></div>
                <a href="">Esqueceu sua senha?</a>
            </form>
        </>
    )
}