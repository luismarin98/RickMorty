import { ReactNode, createContext, /*useState, Dispatch, SetStateAction*/ } from 'react';
import { UserRequest } from "../domain/userRequest";
import useUsuarios from "../hooks/useUsuario";

export interface IUsuariosContext {
    usuariosList: UserRequest[] | undefined;//Obtiene la lista de usuarios    
    userData: UserRequest | undefined;//Obtiene solo un usuario
    getUsers: () => void;//Obtiene el array de los usuarios
    getSearch: (id_user: string) => void;//Funcion de la busqueda por id
    saveUser: (params: UserRequest) => void;//Guardar usuarios;
}

const UsuariosContext = createContext({});

export const UsuariosProvider = ({ children }: { children: ReactNode }) => {
    const { usuarios, getUsuarios, user, searchUser, postUsers } = useUsuarios();

    const storage: IUsuariosContext = {
        usuariosList: usuarios,
        userData: user,
        getUsers: getUsuarios,
        getSearch: searchUser,
        saveUser: postUsers,
    };

    return <UsuariosContext.Provider value={storage}>{children}</UsuariosContext.Provider>
}

export default UsuariosContext;