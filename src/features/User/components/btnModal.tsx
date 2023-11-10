import { useFormContext } from "react-hook-form";
import { UserRequest } from "../domain/userRequest";
import { useContext, MouseEvent } from 'react';
import UsuariosContext, { IUsuariosContext } from "../providers/userProvider";

interface BtnItems {
    nameBtn: string;
    statusEdit: boolean;
}

const BtnModal = (props: BtnItems) => {
    const { setData, saveUser, setDataSave, setUserModal } = useContext(UsuariosContext) as IUsuariosContext;
    const { reset, getValues } = useFormContext<UserRequest>();

    const value = { ...getValues() };

    const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (!value) return null;
        if (props.statusEdit === true) {
            setData(value);
        } else if (props.statusEdit === false) {
            //console.log(value)
            setDataSave(value);
            saveUser();
        }
        reset();
        setUserModal(false)
    }

    return <button onClick={handleClick}>{props.nameBtn}</button>
}

export default BtnModal;