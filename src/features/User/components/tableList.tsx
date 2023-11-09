import { FC, useContext } from "react";
import UsuariosContext, { IUsuariosContext } from "../providers/userProvider";
import { UserRequest } from "../domain/userRequest";

import { useFormContext } from "react-hook-form";

const TableList: FC = () => {
  const {
    usuariosList,
    deletUser,
    getUsers,
    setIdUser,
    editModal,
    setEditModal,
    idUser,
  } = useContext(UsuariosContext) as IUsuariosContext;

  const { reset } = useFormContext<UserRequest>();

  if (!usuariosList) return <div>Aun no hay datos en la base de datos</div>;

  const handleEdit = (id: string) => {
    setEditModal(!editModal);
    idUser === null ? setIdUser(id) : null;
    const usuario = usuariosList.find((x) => (x.id = id));
    if (usuario) {
      reset(usuario);
    }
  };

  const handleDelete = (id: UserRequest) => {
    if (!id) return null;
    deletUser(id);
    getUsers();
  };

  return (
    <div className="shadow-sm shadow-slate-600 gap-1 p-2 rounded-md bg-stone-100 dark:bg-slate-800 w-96 flex justify-center">
      <table className="table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {usuariosList.map((data) => (
            <tr key={data.id}>
              <th>{data.id}</th>
              <th>{data.nombre}</th>
              <th>{data.apellido}</th>
              <th className="flex gap-1">
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
                  onClick={() => handleEdit(data.id)}
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
