import { useState } from 'react';
import axios from 'axios';
import { UserRequest } from '../../domain/userRequest';

const useDeleteUser = () => {
    const [deleteParams, setDeleteParams] = useState<UserRequest | undefined>();
    const [idDelet, setIdDelet] = useState<string | null>('');

    const runDelete = async () => {
        const query = `http://localhost:3000/usuarios/${idDelet}`;
        await axios.delete(query, { data: deleteParams }).then((res) => {
            if (res.status === 404) return alert('Algo paso, Intenta nuevamente');
            if (res.status === 200) return alert('Usuario eliminado con exito');
        }).catch((err) => console.error(err));
    }

    return { deleteParams, idDelet, setDeleteParams, setIdDelet, runDelete }
}

export default useDeleteUser;