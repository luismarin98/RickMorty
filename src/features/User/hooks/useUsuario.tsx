import { useState } from "react";
import { UserRequest } from "../domain/userRequest";
import axios from "axios";

const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<UserRequest[]>([]);

    const getUsuarios = async () => {
        const response = await axios.get('');
        if (!response.data) return null;
        setUsuarios(response.data);
    }

    const updateUsuario = (newData: UserRequest[]) => { setUsuarios(newData) };

    return { usuarios, getUsuarios, updateUsuario }
}

export default useUsuarios;