import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { UserRequest } from "../domain/userRequest";
import {
  useDeleteUser,
  useEditUser,
  usegetUsers,
  useSaveUser,
  useSearchUser,
} from "../hooks";

export interface IUsuariosContext {
  usuariosList: UserRequest[] | undefined; //Obtiene la lista de usuarios
  userData: UserRequest | undefined; //Obtiene solo un usuario
  getUsers: () => void; //Obtiene el array de los usuarios
  getSearch: (id_user: string) => void; //Funcion de la busqueda por id
  saveUser: () => void; //Guardar usuarios;
  setDataSave: (params: UserRequest) => void;
  deleteUser: (params: UserRequest) => void;
  userModal: boolean;
  setUserModal: (param: boolean) => void;
  editUser: () => void;
  setDataEdit: (param: UserRequest) => void;
  statusEdit: boolean;
  setStatusEdit: (param: boolean) => void;
  IdUser: string | null;
  setIdUser: Dispatch<SetStateAction<string | null>>;
  statusFilter: boolean | null;
  setStatusFilter: Dispatch<SetStateAction<boolean | null>>;
  dateNow: string | null;
  setDateNow: Dispatch<SetStateAction<string | null>>;
}

const UsuariosContext = createContext({});

export const UsuariosProvider = ({ children }: { children: ReactNode }) => {
  const { usuarios, getUsers } = usegetUsers();
  const { user, searchUser } = useSearchUser();
  const { deleteUser } = useDeleteUser();
  const { editUser, setDataEdit } = useEditUser();
  const { saveUser, setDataSave } = useSaveUser();

  const [userModal, setUserModal] = useState(false);
  const [statusEdit, setStatusEdit] = useState(false);
  const [IdUser, setIdUser] = useState<string | null>("");
  const [statusFilter, setStatusFilter] = useState<boolean|null>(null);
  const [dateNow, setDateNow] = useState<string | null>("");

  const storage: IUsuariosContext = {
    usuariosList: usuarios,
    getUsers,
    userData: user,
    getSearch: searchUser,
    saveUser,
    setDataSave,
    deleteUser,
    userModal,
    setUserModal,
    editUser,
    setDataEdit,
    statusEdit,
    setStatusEdit,
    IdUser,
    setIdUser,
    statusFilter,
    setStatusFilter,
    dateNow,
    setDateNow
  };

  return (
    <UsuariosContext.Provider value={storage}>
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosContext;
