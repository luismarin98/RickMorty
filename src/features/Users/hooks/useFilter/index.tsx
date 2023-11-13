import { useState } from 'react';
import axios from 'axios';
import { UserRequest } from '../../domain/userRequest';

const useFilter = () => {
    const [dataFilter, setDataFilter] = useState<UserRequest[]>([]);
    const [dateParam, setDateParam] = useState<string | null>('');
    const [statusParam, setStatusParam] = useState<boolean | null>(null);

    const runFilter = async () => {
        if (!dataFilter) return alert('Asegurate de ingresar los datos');

        //Parametro de consulta
        const query = `http://localhost:3000/usuarios/${statusParam === true ? '?status=true' : statusParam === false ? '?status=false' : statusParam === null ? '' : dateParam !== '' ? `&fecha=${dateParam}` : ''}`;

        await axios.get(query).then((res) => {
            if (!res.data) return null;
            if (res.status === 404) return alert('Algo paso, intenta nuevamente');
            setDataFilter(res.data);
        }).catch((err) => console.error(err));
    }

    return { dataFilter, dateParam, statusParam, setDateParam, setStatusParam, runFilter };
}

export default useFilter;