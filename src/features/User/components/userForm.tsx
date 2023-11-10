import { FC, useContext, ChangeEvent } from "react";
import UsuariosContext, { IUsuariosContext } from "../providers/userProvider";
import ModalInsert from "./modalInsert";
import { EditUser } from "./modalComponent/editUser";
import { NewUser } from "./modalComponent/newUser";
import { useFormContext } from "react-hook-form";
import { UserRequest } from "../domain/userRequest";
import moment from "moment";

export const UserForm: FC = () => {
  const {
    getUsers,
    userModal,
    setUserModal,
    statusEdit,
    setStatusEdit,
    statusFilter,
    setStatusFilter,
    setDateNow,
  } = useContext(UsuariosContext) as IUsuariosContext;
  const { reset } = useFormContext<UserRequest>();

  const today = new Date();
  const date = today.setDate(today.getDate());
  const defaultValue = new Date(date).toISOString().split("T")[0];

  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
    const dateformat = moment(event.target.value).format('DD/MM/YYYY');
    setDateNow(dateformat);
  };

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
        <label>
          <input
            className="text-center p-2 rounded-md"
            id="dateRequired"
            type="date"
            name="dateRequired"
            defaultValue={defaultValue}
            onChange={handleDate}
          />
        </label>
      </div>

      <ModalInsert isOpen={userModal} onClose={toggleModal} title={"Usuario"}>
        {statusEdit ? <EditUser /> : <NewUser />}
      </ModalInsert>
    </div>
  );
};
