import { FC, useContext } from "react";
import { UserRequest } from "../domain/userRequest";
import { useFormContext } from "react-hook-form";
import UsuariosContext, { IUsuariosContext } from "../providers/userProvider";
import ModalInsert from "./modalInsert";
import InputText from "./inputText";

const dataNull = {
  id: '',
  nombre: '',
  apellido: ''
}

export const UserForm: FC = () => {
  const { saveUser, getUsers, setIdUser, idUser, editModal, setEditModal } =
    useContext(UsuariosContext) as IUsuariosContext;
  const { getValues, reset } = useFormContext<UserRequest>();

  const toggleModal = () => {
    reset(dataNull);
    setIdUser(null);
    setEditModal(!editModal);
    //debugger;
  };

  const handleBTN = async () => {
    const value = { ...getValues() };
    if (!value.nombre) return null;
    saveUser(value);
    alert(idUser ? 'Usuario editado con exito' : 'Usuario guardado con exito')
    reset();
    setEditModal(false);
  };

  return (
    <div className="container flex flex-col shadow-sm shadow-slate-600 gap-1 p-2 rounded-md bg-stone-100 dark:bg-slate-800  justify-center">
      <div className="lg:text-right md:text-center">
        <button
          onClick={toggleModal}
          className="border rounded-lg p-2 m-2 bg-blue-300 hover:bg-blue-400"
        >
          Nuevo Usuario
        </button>
        <button
          onClick={() => getUsers()}
          className="border rounded-lg p-2 m-2 bg-blue-300 hover:bg-blue-400"
        >
          Consultar
        </button>
      </div>

      <ModalInsert
        isOpen={editModal}
        onClose={toggleModal}
        title={idUser === null ? "Guardar usuario" : "Editar usuario"}
      >
        <div className="grid p-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 text-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <InputText title="id" name="id" />
            <InputText title="nombre" name="nombre" />
            <InputText title="apellido" name="apellido" />
          </div>
          <button
            title="boton"
            className="border  rounded-xl p-2 m-2 bg-blue-400"
            onClick={handleBTN}
          >
            {idUser === null ? "Guardar" : "Editar"}
          </button>
        </div>
      </ModalInsert>
    </div>
  );
};
