import { FC, useContext } from 'react';
import { UserRequest } from '../domain/userRequest';
import { useFormContext } from 'react-hook-form';
import UsuariosContext, { IUsuariosContext } from '../providers/userProvider';
import InputText from './inputText';
import OpenModal from './openBtnModal';

export const UserForm: FC = () => {
    const { getSearch } = useContext(UsuariosContext) as IUsuariosContext;
    const { getValues } = useFormContext<UserRequest>();

    const handleUser = async () => {
        const value = { ...getValues() };
        if (!value.id) return null;
        getSearch(value.id);
    };

    return <div>
        <div className="container flex flex-row shadow-sm shadow-slate-600 gap-1 p-2 rounded-md bg-stone-100 dark:bg-slate-800  justify-center">
            <InputText name='id' title={'Ingresa el id del usuario'} />
            <button className="p-1 hover:bg-slate-400 rounded-sm w-32 dark:bg-slate-200" onClick={handleUser}>Buscar</button>
            <OpenModal />
        </div>
    </div>
}