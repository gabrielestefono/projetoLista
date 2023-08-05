import estilo from "./Header.module.scss";

export default function Header(){
    return(
        <>
            <div className={estilo.header}>
                <h1>WeBest</h1>
            </div>
            <div className={estilo.imagem}>
                <div></div>
            </div>
        </>
    )
}