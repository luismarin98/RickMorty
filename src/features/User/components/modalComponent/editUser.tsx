import { FC, useContext, MouseEvent, useState, ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { UserRequest } from "../../domain/userRequest";
import UsuariosContext, {
  IUsuariosContext,
} from "../../providers/userProvider";

export const EditUser: FC = () => {
  const { editUser, setDataEdit, setUserModal } = useContext(
    UsuariosContext
  ) as IUsuariosContext;
  const [selectedOption, setSelectedOption] = useState<boolean>(false);
  const { register, getValues, reset, setValue } =
    useFormContext<UserRequest>();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value;
    switch (status) {
      case "activo":
        setSelectedOption(true);
        break;

      case "inactivo":
        setSelectedOption(false);
        break;
    }
  };

  const handleEdit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setValue("status", selectedOption);
    const value = { ...getValues() };
    if (!value) return null;
    setDataEdit(value);
    editUser();
    setUserModal(false);
    reset();
  };

  return (
    <div className="grid p-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 text-center">
      <div className="flex flex-col justify-center items-center gap-1">
        <label className="flex flex=col gap-1 justify-center items-center p-1">
          <p className="dark:text-white">ID:</p>
          <input
            className="border-solid rounded-lg text-center border-spacing-1 bg-slate-300"
            type="text"
            disabled
            {...register("id")}
          />
        </label>
        <label className="flex flex=col gap-1 justify-center items-center p-1">
          <p className="dark:text-white">Nombres:</p>
          <input
            className="border-solid rounded-lg text-center border-spacing-1 bg-slate-300"
            type="text"
            {...register("nombre")}
          />
        </label>
        <label className="flex flex=col gap-1 justify-center items-center p-1">
          <p className="dark:text-white">Apellidos:</p>
          <input
            className="border-solid rounded-lg text-center border-spacing-1 bg-slate-300"
            type="text"
            {...register("apellido")}
          />
        </label>
        <label className="flex flex=col gap-1 justify-center items-center p-1">
          <p className="dark:text-white">Estado</p>
          <select
            className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50"
            id="status"
            value={selectedOption ? "activo" : 'inactivo'}
            onChange={handleChange}
          >
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </label>
        <button onClick={handleEdit}>Editar</button>
      </div>
    </div>
  );
};
