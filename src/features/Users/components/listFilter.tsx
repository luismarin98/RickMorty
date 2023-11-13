import { FC, useContext } from "react";
import UsuarioContext, { IUsuarioContext } from "../providers/userProvaider";
import { useFormContext } from "react-hook-form";
import { UserRequest } from "../domain/userRequest";

export const ListFilter: FC = () => {
    const { dataFilter, setDeleteParams, runDelete, setIdDelet, setOpenModal, setEditModal } = useContext(UsuarioContext) as IUsuarioContext;
    const { setValue } = useFormContext<UserRequest>();

    const handleBTNEdit = (data: UserRequest) => {
        setOpenModal(true);
        setEditModal(true);

        setValue('id', data.id);
        setValue('nombres', data.nombres);
        setValue('apellidos', data.apellidos);
        setValue('status', data.status);
        setValue('fecha', data.fecha);
    }

    const handleBtnDelete = (data: UserRequest) => {
        setIdDelet(data.id);
        setDeleteParams(data)
        runDelete();
    }

    return <table className="bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl table-fixed sm:w-1/2 sm:p-2 md:w-3/4 md:p-2 lg:w-5/6 lg:p-2 xl:w-full xl:p-2">
        <thead>
            <tr className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                <th>ID</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Estado</th>
                <th>Fecha registro</th>
            </tr>
        </thead>
        <tbody>
            {
                dataFilter?.map((data) => <tr className="text-slate-500 dark:text-slate-400 mt-2 text-sm" key={data.id}>
                    <th>{data.id}</th>
                    <th>{data.nombres}</th>
                    <th>{data.apellidos}</th>
                    <th>{data.status ? 'Activo' : 'Inactivo'}</th>
                    <th>{data.fecha}</th>
                    <th className="flex flex-row gap-1 p-2">
                        <button
                            className="border rounded-lg p-2 bg-blue-300 hover:bg-blue-400 dark:bg-slate-200 dark:hover:bg-slate-300 text-black"
                            onClick={() => handleBTNEdit(data)}
                        >
                            <span className="material-symbols-outlined">
                                edit
                            </span>
                        </button>
                        <button
                            className="border rounded-lg p-2 bg-blue-300 hover:bg-blue-400 dark:bg-slate-200 dark:hover:bg-slate-300 text-black"
                            onClick={() => handleBtnDelete(data)}
                        >
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </th>
                </tr>)
            }
        </tbody>
    </table>
}