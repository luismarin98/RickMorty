import { FC, useContext, ChangeEvent } from "react";
import UsuariosContext, { IUsuariosContext } from "../providers/userProvider";
import ModalInsert from "./modalInsert";
import { EditUser } from "./modalComponent/editUser";
import { NewUser } from "./modalComponent/newUser";
import { useFormContext } from "react-hook-form";
import { UserRequest } from "../domain/userRequest";
import { DateModalChild } from "./modalComponent/dateSearch";

export const UserForm: FC = () => {
  const {
    getUsers,
    userModal,
    setUserModal,
    statusEdit,
    setStatusEdit,
    statusFilter,
    setStatusFilter,
  } = useContext(UsuariosContext) as IUsuariosContext;
  const { reset } = useFormContext<UserRequest>();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value;
    switch (status) {
      case "todos":
        setStatusFilter(null);
        break;

      case "inactivo":
        setStatusFilter(false);
        break;

      case "activo":
        setStatusFilter(true);
        break;
    }
  };

  const toggleModal = () => {
    setUserModal(!userModal);
    reset();
    if (statusEdit) {
      setStatusEdit(false);
    }
  };

  return (
    <div className="flex flex-col shadow-sm shadow-slate-600 gap-1 p-2 rounded-md bg-stone-100 justify-center dark:bg-gray-600">
      <div className="flex justify-center items-center gap-1 tablet:flex-col laptop:flex-row sm:flex-col">
        <div className="flex tablet:flex-col laptop:flex-row desktop:flex-row lg:flex-row lg:gap-2 laptop:gap-2 tablet:gap-2">
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
        <DateModalChild />
        <label className="flex flex-row items-center gap-1">
          <p className="dark:text-white">Estado</p>
          <select
            className="rounded-md p-2 hover:bg-gray-50 text-center"
            id="status"
            value={
              statusFilter
                ? "activo"
                : statusFilter === null
                ? "todos"
                : "inactivo"
            }
            onChange={handleChange}
          >
            <option value="todos">Todos</option>
            <option value="activo">Activos</option>
            <option value="inactivo">Inactivos</option>
          </select>
        </label>
      </div>

      <ModalInsert isOpen={userModal} onClose={toggleModal} title={"Usuario"}>
        {statusEdit ? <EditUser /> : <NewUser />}
      </ModalInsert>
    </div>
  );
};
