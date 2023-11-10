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
  } = useContext(UsuariosContext) as IUsuariosContext;

  const { setValue } = useFormContext<UserRequest>();

  if (!usuariosList) return <div>Aun no hay datos en la base de datos</div>;

  const handleEdit = (params: UserRequest) => {
    setUserModal(!userModal);
    setValue("id", params.id);
    setValue("nombre", params.nombre);
    setValue("apellido", params.apellido);
    setStatusEdit(true);
    //setIdUser(params.id);
    //reset();
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
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {usuariosList
            .filter((data) => {
              switch (statusFilter) {
                case true:
                  return data.status === true
                  break;
              
                case false:
                  return data.status === false
                  break;

                case null:
                  return data.status === true || data.status === false;
                  break;
              }
              //statusFilter === true ?  : statusFilter === false ?  : null
            } )
            .map((data) => (
              <tr key={data.id}>
                <th>{data.id}</th>
                <th>{data.nombre}</th>
                <th>{data.apellido}</th>
                <th>{data.status ? "Activo" : "Inactivo"}</th>
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
