import estilo from "./AddIcon.module.scss";
import { PlusIcon } from "@/components/Icons/PlusIcon";

export default function AddIcon(){
    return (
        <div className={estilo.addicon}>
            <div>{PlusIcon}</div>
        </div>
    )
}