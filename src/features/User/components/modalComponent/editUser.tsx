import { FC, useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import { UserRequest } from "../../domain/userRequest";
import UsuariosContext, {
  IUsuariosContext,
} from "../../providers/userProvider";

export const EditUser: FC = () => {
  const { editUser, setDataEdit } = useContext(
    UsuariosContext
  ) as IUsuariosContext;
  const { register, getValues, reset } = useFormContext<UserRequest>();

  const handleEdit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const value = { ...getValues() };
    if (!value) return null;
    setDataEdit(value);
    editUser();
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
        <button onClick={handleEdit}>Editar</button>
      </div>
    </div>
  );
};
