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
import useFilterDate from "../hooks/useSearchDate";

export interface IUsuariosContext {
  //Crud Usuarios
  usuariosList: UserRequest[] | undefined;
  userData: UserRequest | undefined;
  getUsers: () => void; //Obtiene el array de los usuarios
  getSearch: (id_user: string) => void; //Funcion de la busqueda por id
  saveUser: () => void; //Guardar usuarios
  setDataSave: (params: UserRequest) => void; //Guardar datos
  deleteUser: (params: UserRequest) => void; //Eliminar datos
  //Modal guardar usuario
  userModal: boolean;
  setUserModal: (param: boolean) => void;
  //Variables editar usuario
  editUser: () => void;
  setDataEdit: (param: UserRequest) => void;
  //Abre o cierra modal de edicion
  statusEdit: boolean;
  setStatusEdit: (param: boolean) => void;
  //Abre modal de fechas
  statusDate: boolean;
  setStatusDate: (param: boolean) => void;
  //Da y devuelve el id de usuario
  IdUser: string | null;
  setIdUser: Dispatch<SetStateAction<string | null>>;
  //Filtro de estados
  statusFilter: boolean | null;
  setStatusFilter: Dispatch<SetStateAction<boolean | null>>;
  //Filtro de fechas
  dateNow: string | null;
  setDateNow: Dispatch<SetStateAction<string | null>>;
  toDatenow: string | null;
  setToDateNow: Dispatch<SetStateAction<string | null>>;
  rangeUsers: UserRequest[] | undefined;
  runFilter: () => void;
}

const UsuariosContext = createContext({});

export const UsuariosProvider = ({ children }: { children: ReactNode }) => {
  const { usuarios, getUsers } = usegetUsers();
  const { user, searchUser } = useSearchUser();
  const { deleteUser } = useDeleteUser();
  const { editUser, setDataEdit } = useEditUser();
  const { saveUser, setDataSave } = useSaveUser();
  const { dateNow, setDateNow, rangeUsers, runFilter } = useFilterDate();

  const [statusDate, setStatusDate] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [statusEdit, setStatusEdit] = useState(false);
  const [IdUser, setIdUser] = useState<string | null>("");
  const [statusFilter, setStatusFilter] = useState<boolean | null>(null);
  const [toDatenow, setToDateNow] = useState<string | null>("");

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
    setDateNow,
    toDatenow,
    setToDateNow,
    statusDate,
    setStatusDate,
    rangeUsers,
    runFilter
  };

  return (
    <UsuariosContext.Provider value={storage}>
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosContext;
