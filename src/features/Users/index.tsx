import { ListFilter } from "./components/listFilter";
import { UserForm } from "./components/userForm";
import { UserRequest } from "./domain/userRequest";
import { UsuarioProvaider } from "./providers/userProvaider";
import { FormProvider, useForm } from 'react-hook-form';

const Users = () => {
    const initialStateForm: UserRequest = { id: '', nombres: '', apellidos: '', status: true, fecha: '' };

    const metohds = useForm<UserRequest>({ defaultValues: initialStateForm });

    return <UsuarioProvaider>
        <FormProvider {...metohds}>
            <div className="flex flex-col gap-2 items-center m-2">
                <UserForm />
                <ListFilter />
            </div>
        </FormProvider>
    </UsuarioProvaider>
}

export default Users;