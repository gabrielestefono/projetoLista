import estilo from "./Header.module.scss";

export default function Header(){
    return(
        <>
            <div className={estilo.header}>
                <a href="/">WeBest</a>
            </div>
        </>
    )
}