import { useFormContext } from "react-hook-form";
import { UserRequest } from "../domain/userRequest";
import { useContext, MouseEvent } from 'react';
import UsuariosContext, { IUsuariosContext } from "../providers/userProvider";

interface BtnItems {
    nameBtn: string;
    status: string;
}

const BtnModal = (props: BtnItems) => {
    const { setStatusEdit, setData, saveUser, setUserModal } = useContext(UsuariosContext) as IUsuariosContext;
    const { reset, getValues } = useFormContext<UserRequest>();

    const value = { ...getValues() };

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (!value) return null;
        if (props.status === 'edit') {
            setData(value);
        } else if (props.status === 'save') {
            saveUser(value);
        }
        reset();
        setUserModal(false)
    }
    props.status === "edit" ? setStatusEdit(true) : setStatusEdit(false);

    return <button onClick={handleClick}>{props.nameBtn}</button>
}

export default BtnModal;