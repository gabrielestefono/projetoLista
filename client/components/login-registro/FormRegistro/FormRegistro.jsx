import { useState } from 'react';
import estilo from './FormRegistro.module.scss';
import { useCsrfToken } from '@/utils/CsrfTokenContext';

export default function FormRegistro() {

    const csrfToken = useCsrfToken();

    /* Definindo e recebendos os dados dos input's */
    const [dados, setDados] = useState({
        nome: '',
        senha: '',
        confirmacaoSenha: '',
        email: ''
    });

    const mudarDados = (e) =>{
        setDados({
            ...dados,
            [e.target.name]: e.target.value
        });
        console.log(csrfToken);
    }

    /* fazer uma requisição para o servidor */
    const registrar = async (e) =>{
        e.preventDefault();
        const resposta = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "credentials": csrfToken
            },
            body: JSON.stringify(dados)
        });

        const res = await resposta.json();
        if(res.message == "Sucesso!"){
            window.location.href = '/login';
        }else{
            alert(res.message);
        }
    }

    return (
        <form className={estilo.form}>
            <div className={estilo.info}>
                <label htmlFor="">Nome de Usuário</label>
                <div className={estilo.backgroundinput}>
                    <input type="text" onChange={mudarDados} name='nome' placeholder="Escolha um nome de usuário"/>
                </div>
            </div>
            <div className={estilo.info}>
                <label htmlFor="">Senha</label>
                <div className={estilo.backgroundinput}>
                    <input type="password" onChange={mudarDados} name='senha' placeholder="Digite a sua senha"/>
                </div>
            </div>
            <div className={estilo.info}>
                <label htmlFor="">Confirmação de senha</label>
                <div className={estilo.backgroundinput}>
                    <input type="password" onChange={mudarDados} name='confirmacaoSenha' placeholder="Por favor, confirme a sua senha"/>
                </div>
            </div>
            <div className={estilo.info}>
                <label htmlFor="">Email</label>
                <div className={estilo.backgroundinput}>
                    <input type="email" onChange={mudarDados} name='email' placeholder="Por favor, digite o seu email"/>
                </div>
            </div>
            <button onClick={registrar}>Registrar</button>
            <div className={estilo.separate}></div>
            <div className={estilo.login}><a href="/login">Já possui uma conta?</a></div>
        </form>
    )
}