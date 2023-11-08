import { MouseEvent, FC } from "react";
import { useFormContext } from "react-hook-form";
import { ModalInsert } from "../domain/modalAction";

const OpenModal: FC = () => {
    const { setValue } = useFormContext<ModalInsert>();

    function getAction(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        setValue('isOpen', true);
    }

    return <button className="p-1 hover:bg-slate-400 rounded-sm w-32 dark:bg-slate-200" onClick={getAction}>Nuevo Usuario</button>
}

export default OpenModal;