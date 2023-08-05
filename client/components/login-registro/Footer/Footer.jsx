import {useRouter} from "next/router";

import estilo from './Footer.module.scss'

export default function Footer(){
    const router = useRouter();
    function register(){
        router.push("/register");
    }

    return(
        <div className={estilo.footer}>
            <div className={estilo.sep}>
                <div className={estilo.separate1}></div> Ou <div className={estilo.separate1}></div>
            </div>
            <button id={estilo.register} onClick={register}>Registre-se</button>
            <div className={estilo.separate2}></div>
            <a href="/recover" className={estilo.forget}>Esqueceu sua senha?</a>
        </div>
    )
}