import { FC, useContext } from "react";
import UsuariosContext, { IUsuariosContext } from "../providers/userProvider";
import ModalInsert from "./modalInsert";
import { EditUser } from "./modalComponent/editUser";
import { NewUser } from "./modalComponent/newUser";

export const UserForm: FC = () => {
  const { getUsers, userModal, setUserModal, statusEdit } = useContext(UsuariosContext) as IUsuariosContext;

  const toggleModal = () => {
    setUserModal(!userModal);
  };

  return (
    <div className="container flex flex-col shadow-sm shadow-slate-600 gap-1 p-2 rounded-md bg-stone-100 justify-center dark:bg-gray-600">
      <div className="flex justify-center items-center gap-1">
        <button
          onClick={toggleModal}
          className="border rounded-lg p-2 bg-blue-300 hover:bg-blue-400 dark:bg-slate-200 dark:hover:bg-slate-300"
        >
          Nuevo Usuario
        </button>
        <button
          onClick={() => getUsers()}
          className="border rounded-lg p-2 bg-blue-300 hover:bg-blue-400 dark:bg-slate-200 dark:hover:bg-slate-300"
        >
          Consultar
        </button>
      </div>

      <ModalInsert
        isOpen={userModal}
        onClose={toggleModal}
        title={'Usuario'}
      >
        {
          statusEdit ? <EditUser /> : <NewUser />
        }
      </ModalInsert>
    </div>
  );
};
