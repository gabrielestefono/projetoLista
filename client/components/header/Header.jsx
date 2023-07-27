import AddIcon from "./Navbar/AddIcon";
import MadeIcon from "./Navbar/MadeIcon";
import estilo from "./Header.module.scss";

export default function Header(){
    return (
        <div className={estilo.abismo}>
            <MadeIcon texto="Estudos"/>
            <MadeIcon texto="Trabalho"/>
            <AddIcon/>
        </div>
    )
}