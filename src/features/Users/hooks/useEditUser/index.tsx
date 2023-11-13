import { useState } from 'react';
import axios from 'axios';
import { UserRequest } from '../../domain/userRequest';

const useEditUser = () => {
    const [editParams, setEditParams] = useState<UserRequest>()

    const runEdit = async () => {
        const query = `http://localhost:3000/usuarios/${editParams?.id}`;
        await axios.put(query, { ...editParams }).then((res) => {
            if (res.status === 404) return alert('Algo ha pasado intenta nuevamente');
            if (res.status === 200) return alert('Usuario editado con exito');
        }).catch((err) => console.error(err));
    }

    return { editParams, setEditParams, runEdit }
}

export default useEditUser;