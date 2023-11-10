import { FC, useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import { UserRequest } from "../../domain/userRequest";
import UsuariosContext, {
  IUsuariosContext,
} from "../../providers/userProvider";

export const NewUser: FC = () => {
  const { setDataSave, saveUser, setUserModal } = useContext(
    UsuariosContext
  ) as IUsuariosContext;
  const { register, getValues, reset } = useFormContext<UserRequest>();

  const handleBtnSave = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const value = { ...getValues() };
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
      <button onClick={handleBtnSave}>Guardar</button>
    </div>
  );
};
