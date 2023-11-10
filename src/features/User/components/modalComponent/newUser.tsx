import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { UserRequest } from "../../domain/userRequest";
import BtnModal from "../btnModal";

export const NewUser: FC = () => {
    const { register } = useFormContext<UserRequest>();

    return <div className="grid p-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 text-center">
        <div className="flex flex-col justify-center items-center gap-1">
            <label className="flex flex=col gap-1 justify-center items-center p-1">
                <p className="dark:text-white">ID:</p>
                <input className="border-solid rounded-lg text-center border-spacing-1 bg-slate-300" type="text" {...register('id')} />
            </label>
            <label className="flex flex=col gap-1 justify-center items-center p-1">
                <p className="dark:text-white">Nombres:</p>
                <input className="border-solid rounded-lg text-center border-spacing-1 bg-slate-300" type="text" {...register('nombre')} />
            </label>
            <label className="flex flex=col gap-1 justify-center items-center p-1">
                <p className="dark:text-white">Apellidos:</p>
                <input className="border-solid rounded-lg text-center border-spacing-1 bg-slate-300" type="text" {...register('apellido')} />
            </label>
            <BtnModal nameBtn={"Guardar"} status={"save"} />
        </div>
    </div>
}