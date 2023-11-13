import { useState } from 'react';
import axios from 'axios';
import { UserRequest } from '../../domain/userRequest';

const useSaveUser = () => {
    const [saveParams, setSaveParams] = useState<UserRequest | undefined>();

    const runSave = async () => {
        const query = `http://localhost:3000/usuarios`;
        await axios.post(query, { ...saveParams }).then((res) => {
            if (!res.data) return null;
            if (res.status === 200) return alert('Usuario guardado con exito');
            if (res.status === 404) return alert('Algo ha pasado intente nuevamente');
        }).catch((err) => console.error(err));
    }

    return { setSaveParams, runSave, saveParams }
}

export default useSaveUser;