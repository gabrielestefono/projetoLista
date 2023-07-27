import estilo from "./MadeIcon.module.scss";

export default function MadeIcon(props){
    return (
        <div className={estilo.madeicon}>
            <p>{props.texto}</p>
        </div>
    )
}