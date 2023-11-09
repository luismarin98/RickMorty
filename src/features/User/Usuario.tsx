import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { UserRequest } from './domain/userRequest';
import { UserForm } from './components/userForm';
import CardUsers from './components/usersList';

export const Usuarios: FC = () => {
    const initialStateForm: UserRequest = { id: '', nombre: '', apellido: '' };

    const methods = useForm<UserRequest>({ defaultValues: initialStateForm });

    return <FormProvider {...methods}>
        <div>
            <UserForm />
            <CardUsers />
        </div>
    </FormProvider>
}