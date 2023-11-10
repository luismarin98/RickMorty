import { FC, useContext, MouseEvent, useState, ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { UserRequest } from "../../domain/userRequest";
import UsuariosContext, {
  IUsuariosContext,
} from "../../providers/userProvider";

export const NewUser: FC = () => {
  const { setDataSave, saveUser, setUserModal } = useContext(
    UsuariosContext
  ) as IUsuariosContext;
  const [selectedOption, setSelectedOption] = useState<boolean>(false);
  const { register, getValues, reset, setValue } =
    useFormContext<UserRequest>();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value;
    setSelectedOption(status === "activo" ? true : false);
  };

  //console.log(selectedOption)

  const handleBtnSave = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setValue("status", selectedOption);
    const value = { ...getValues() };
    console.log(value);
    if (!value) return null;
    setDataSave(value);
    saveUser();
    setUserModal(false);
    reset();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <label className="flex flex=col gap-1 justify-center items-center p-1">
        <p className="dark:text-white">ID:</p>
        <input
          className="border-solid rounded-lg text-center border-spacing-1 bg-slate-300"
          type="text"
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
          value={selectedOption ? 'activo' : 'inactivo'}
          onChange={handleChange}
        >
          <option className="text-center" value="activo">
            Activo
          </option>
          <option className="text-center" value="inactivo">
            Inactivo
          </option>
        </select>
      </label>
      <button onClick={handleBtnSave}>Guardar</button>
    </div>
  );
};
