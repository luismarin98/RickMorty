import { createContext, ReactNode, Dispatch, SetStateAction, useState } from 'react';
import { UserRequest } from '../domain/userRequest';
import { useDeleteUser, useEditUser, useFilter, useSaveUser } from '../hooks';

export interface IUsuarioContext {
    //Busqueda de datos por parametros de busqueda
    dataFilter: UserRequest[] | undefined;
    runFilter: () => void;
    dateParam: string | null;
    setDateParam: Dispatch<SetStateAction<string | null>>;
    statusParam: boolean | null;
    setStatusParam: Dispatch<SetStateAction<boolean | null>>;

    //Parametros de guardado de usuarios
    saveParams: UserRequest | undefined;
    setSaveParams: Dispatch<SetStateAction<UserRequest | undefined>>
    runSave: () => void;

    //Parametros de edicion de usuarios
    editParams: UserRequest | undefined;
    setEditParams: Dispatch<SetStateAction<UserRequest | undefined>>;
    runEdit: () => void;

    //Parametros de eliminacion de usuarios
    deleteParams: UserRequest | undefined;
    idDelet: string | null;
    setDeleteParams: Dispatch<SetStateAction<UserRequest | undefined>>;
    setIdDelet: Dispatch<SetStateAction<string | null>>;
    runDelete: () => void;

    //Parametros de activacion del modal
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;

    //Parametros de activacion del modal edicion
    editModal: boolean;
    setEditModal: Dispatch<SetStateAction<boolean>>;
}

const UsuarioContext = createContext({});

export const UsuarioProvaider = ({ children }: { children: ReactNode }) => {

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [editModal, setEditModal] = useState<boolean>(false);

    const { dataFilter, runFilter, dateParam, setDateParam, statusParam, setStatusParam } = useFilter();
    const { saveParams, setSaveParams, runSave } = useSaveUser();
    const { editParams, setEditParams, runEdit } = useEditUser();
    const { deleteParams, idDelet, setDeleteParams, setIdDelet, runDelete } = useDeleteUser();

    const storage: IUsuarioContext = {
        dataFilter,
        runFilter,
        dateParam,
        setDateParam,
        saveParams,
        setSaveParams,
        runSave,
        editParams,
        setEditParams,
        runEdit,
        deleteParams,
        idDelet,
        setDeleteParams,
        setIdDelet,
        runDelete,
        openModal,
        setOpenModal,
        statusParam,
        setStatusParam,
        editModal,
        setEditModal
    }

    return (<UsuarioContext.Provider value={storage}>{children}</UsuarioContext.Provider>)
}

export default UsuarioContext;