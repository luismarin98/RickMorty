import { MouseEvent, useContext, useState, ChangeEvent } from 'react';
import { useFormContext } from "react-hook-form";
import { UserRequest } from '../../domain/userRequest';
import UsuarioContext, { IUsuarioContext } from '../../providers/userProvaider';

export const EditUserContent = () => {
    const { setEditParams, runEdit, setEditModal, setOpenModal } = useContext(UsuarioContext) as IUsuarioContext;
    const { getValues, reset, setValue, register } = useFormContext<UserRequest>();
    const [saveStatus, setSaveStatus] = useState<boolean>(true);

    const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
        switch (event.target.value) {
            case 'inactivo': setSaveStatus(false); break;
            case 'activo': setSaveStatus(true); break;
        }
    }

    const handleEditBTN = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setValue('status', saveStatus);

        const value = { ...getValues() };
        if (!value) return alert('Asegurate de llenar todos los campos');
        setEditParams(value);
        setEditModal(false);
        setOpenModal(false);
        runEdit();
        reset();
    }

    return <div className="flex flex-col gap-2">
        <label className="flex items-center flex-row gap-3 justify-center">
            <p>Nombres</p>
            <input className="text-center text-black rounded-md p-1 bg-slate-300 dark:bg-white" type="text" {...register('nombres')} />
        </label>
        <label className="flex items-center flex-row gap-3 justify-center">
            <p>Apellidos</p>
            <input className="text-center text-black rounded-md p-1 bg-slate-300 dark:bg-white" type="text" {...register('apellidos')} />
        </label>
        <label className="flex items-center flex-row gap-3 justify-center">
            <p>Status</p>
            <select
                className="p-1 rounded-md text-center text-black"
                id='status'
                value={saveStatus ? 'activo' : 'inactivo'}
                onChange={handleStatusChange}
            >
                <option value='activo'>Activo</option>
                <option value='inactivo'>Inactivo</option>
            </select>
        </label>
        <button onClick={handleEditBTN} className="border rounded-lg p-2 bg-blue-300 hover:bg-blue-400 dark:bg-slate-200 dark:hover:bg-slate-300 text-black" >Editar</button>
    </div>
}