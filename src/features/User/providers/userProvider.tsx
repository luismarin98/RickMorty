import {
    ReactNode,
    createContext,
    useState,
    Dispatch,
    SetStateAction,
} from "react";
import { UserRequest } from "../domain/userRequest";
import useUsuarios from "../hooks/useUsuario";

export interface IUsuariosContext {
    loading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>
    usuariosList: UserRequest[];
    searchUsuarios: () => void;
}

const UsuariosContext = createContext({});

export const UsuariosProvider = ({ children }: { children: ReactNode }) => {
    const { usuarios, getUsuarios } = useUsuarios();
    const [load, setLoad] = useState(true);

    const storage: IUsuariosContext = {
        loading: load,
        setIsLoading: setLoad,
        usuariosList: usuarios,
        searchUsuarios: getUsuarios,
    };

    return <UsuariosContext.Provider value={storage}>
        {children}
    </UsuariosContext.Provider>
}

export default UsuariosContext;