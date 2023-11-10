import { FC, useContext } from "react";
import UsuariosContext, { IUsuariosContext } from "../providers/userProvider";
import { UserRequest } from "../domain/userRequest";
import { useFormContext } from "react-hook-form";

const TableList: FC = () => {
  const {
    usuariosList,
    deleteUser,
    getUsers,
    userModal,
    setUserModal,
    setStatusEdit,
    statusFilter,
    dateNow
  } = useContext(UsuariosContext) as IUsuariosContext;

  const { setValue } = useFormContext<UserRequest>();

  if (!usuariosList) return <div>Aun no hay datos en la base de datos</div>;

  const handleEdit = (params: UserRequest) => {
    setUserModal(!userModal);
    setValue("id", params.id);
    setValue("nombre", params.nombre);
    setValue("apellido", params.apellido);
    setStatusEdit(true);
  };

  const handleDelete = (id: UserRequest) => {
    if (!id) return null;
    deleteUser(id);
    getUsers();
  };

  return (
    <div className="flex shadow-sm shadow-slate-600 gap-1 p-2 rounded-md justify-center bg-stone-100 dark:bg-slate-400">
      <table className="tablet:table-fixed tablet:w-3/5 laptop:table-fixed laptop:w-3/4 desktop:table-fixed desktop:w-5/6">
        <thead>
          <tr className="bg-slate-300 rounded-t-lg">
            <th>ID</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Estado</th>
            <th>Fecha y hora</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {usuariosList
            .filter((data) => (statusFilter === true ? data.status === true : statusFilter === false ? data.status === false : data.status === true || data.status === false) || (dateNow === data.fecha))
            .map((data) => (
              <tr key={data.id} className="border-2 border-solid rounded-sm">
                <th className="border border-1 border-solid">{data.id}</th>
                <th className="border border-1 border-solid">{data.nombre}</th>
                <th className="border border-1 border-solid">{data.apellido}</th>
                <th className="border border-1 border-solid">{data.status ? "Activo" : "Inactivo"}</th>
                <th className="border border-1 border-solid">{data.fecha}</th>
                <th className="flex gap-1 justify-center">
                  <button
                    className="p-1 bg-slate-300 rounded-lg flex items-center m-1 hover:bg-red-600"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(data);
                    }}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                  <button
                    className="p-1 bg-slate-300 rounded-lg flex items-center m-1 hover:bg-green-600"
                    onClick={(e) => {
                      e.preventDefault();
                      handleEdit(data);
                    }}
                  >
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
