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
  usuariosList: UserRequest[] | undefined; //Obtiene la lista de usuarios
  userData: UserRequest | undefined; //Obtiene solo un usuario
  getUsers: () => void; //Obtiene el array de los usuarios
  getSearch: (id_user: string) => void; //Funcion de la busqueda por id
  saveUser: (params: UserRequest) => void; //Guardar usuarios;
  deletUser: (params: UserRequest) => void;
  idUser: string | null;
  setIdUser: Dispatch<SetStateAction<string | null>>;
  editModal: boolean;
  setEditModal: (param: boolean) => void;
}

const UsuariosContext = createContext({});

export const UsuariosProvider = ({ children }: { children: ReactNode }) => {
  const { usuarios, getUsuarios, user, searchUser, postUsers, deletUser } =
    useUsuarios();

  const [idUser, setIdUser] = useState<string | null>("");
  const [editModal, setEditModal] = useState(false);

  const storage: IUsuariosContext = {
    usuariosList: usuarios,
    userData: user,
    getUsers: getUsuarios,
    getSearch: searchUser,
    saveUser: postUsers,
    deletUser: deletUser,
    idUser,
    setIdUser,
    editModal,
    setEditModal
  };

  return (
    <UsuariosContext.Provider value={storage}>
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosContext;
