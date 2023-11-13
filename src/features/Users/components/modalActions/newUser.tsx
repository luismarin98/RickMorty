import { MouseEvent, useContext, useState, ChangeEvent } from 'react';
import { useFormContext } from "react-hook-form";
import UsuarioContext, { IUsuarioContext } from '../../providers/userProvaider';
import { UserRequest } from '../../domain/userRequest';
import moment from 'moment';

const UserFormContent = () => {
    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max);
    }

    const [saveStatus, setSaveStatus] = useState<boolean>(true);
    const { setSaveParams, runSave, setOpenModal } = useContext(UsuarioContext) as IUsuarioContext;
    const { register, setValue, getValues, reset } = useFormContext<UserRequest>();

    setValue('id', getRandomInt(100000000000).toString());

    const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        switch (event.target.value) {
            case 'inactivo': setSaveStatus(false); break;
            case 'activo': setSaveStatus(true); break;
        }
    }

    const saveButton = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setValue('status', saveStatus);
        setValue('fecha', moment(new Date().toUTCString()).format('DD/MM/YYYY'));

        const value = { ...getValues() };
        if (!value) return alert('Asegurate de llenar todos los campos');

        setSaveParams(value);
        runSave();

        reset();
        setOpenModal(false);
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
                onChange={handleChangeSelect}
            >
                <option value='activo'>Activo</option>
                <option value='inactivo'>Inactivo</option>
            </select>
        </label>
        <button onClick={saveButton} className="border rounded-lg p-2 bg-blue-300 hover:bg-blue-400 dark:bg-slate-200 dark:hover:bg-slate-300 text-black">Guardar</button>
    </div>
}

export default UserFormContent