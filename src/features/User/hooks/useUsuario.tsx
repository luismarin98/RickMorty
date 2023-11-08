import { useState } from "react";
import { UserRequest } from "../domain/userRequest";
import axios from "axios";

const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<UserRequest[]>();

    const getUsuarios = async () => {
        const response = await axios.get('');
        if (!response.data) return null;
        setUsuarios(response.data);
    }

    return { usuarios, getUsuarios }
}

export default useUsuarios;