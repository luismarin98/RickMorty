import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { UserRequest } from '../../domain/userRequest';
import { UserForm } from '../../components/userForm';
import TableList from '../../components/tableList';

export const Usuarios: FC = () => {
    const initialStateForm: UserRequest = { id: '', nombre: '', apellido: '' };

    const methods = useForm<UserRequest>({ defaultValues: initialStateForm });

    return <FormProvider {...methods}>
        <div className='container flex flex-col gap-2 items-center m-2'>
            <UserForm />
            <TableList />
        </div>
    </FormProvider>
}