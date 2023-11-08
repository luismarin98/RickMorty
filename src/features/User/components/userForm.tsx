import { FC, useContext, useState } from 'react';
import { UserRequest } from '../domain/userRequest';
import { useFormContext } from 'react-hook-form';
import UsuariosContext, { IUsuariosContext } from '../providers/userProvider';
import InputText from './inputText';
import ModalInsert from './modalInsert';

export const UserForm: FC = () => {
    const { saveUser } = useContext(UsuariosContext) as IUsuariosContext;
    const { getValues } = useFormContext<UserRequest>();

    const [openSave, setOpenSave] = useState(false);

    const handleSave = async () => {
        const value = { ...getValues() };
        if (!value.nombre) return null;
        saveUser(value)
    }

    const toggleModalSave = () => {
        setOpenSave(!openSave);
    };

    return <div className="container flex flex-col shadow-sm shadow-slate-600 gap-1 p-2 rounded-md bg-stone-100 dark:bg-slate-800  justify-center">
        <ModalInsert
            isOpen={openSave}
            onClose={toggleModalSave}
            title={"Guardar Usuario"}
        >
            <div className="grid p-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 text-center ">
                <InputText title="Id:" name="id" />
                <InputText title="Nombre:" name="nombre" />
                <InputText title="Apellido:" name="apellido" />
                <button
                    title="boton"
                    className="border  rounded-xl p-2 m-2 bg-blue-400"
                    onClick={handleSave}
                >Agregar</button>
            </div>
        </ModalInsert>

        <div className="lg:text-right md:text-center">
            <button
                title="boton"
                onClick={toggleModalSave}
                className="border  rounded-sm p-2 m-2 bg-blue-400 "
            >Nuevo Usuario</button>
        </div>
    </div>
}