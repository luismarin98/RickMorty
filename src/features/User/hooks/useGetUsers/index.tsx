import { useState } from "react";
import axios from "axios";
import { UserRequest } from "../../domain/userRequest";

const getUsers = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [usuarios, setUsuarios] = useState<UserRequest[]>([]);

    const getUsers = async () => {
        await axios.get('http://localhost:3000/users').then((res) => {
            if (!res.data) return null;
            if (res.status === 404) return alert('Puede que no hayan usuarios en la base de datos');
            if (res.status === 200) return setUsuarios(res.data);
        }).catch((err) => {
            console.error(err);
        })
    }

    return { usuarios, getUsers };
}

export default getUsers;