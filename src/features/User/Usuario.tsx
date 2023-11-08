import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { UserRequest } from './domain/userRequest';

export const Usuarios: FC = () => {
    const initialStateForm: UserRequest = {
        id: '',
        nombre: '',
        apellido: '',
    };

    const methods = useForm<UserRequest>({
        defaultValues: initialStateForm
    });

    return (
        <FormProvider {...methods}>

        </FormProvider>
    )
}