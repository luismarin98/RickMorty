import { useState } from "react";
import { UserRequest } from "../../domain/userRequest";
import axios from "axios";

const useSearchUser = () => {
    const [user, setUSer] = useState<UserRequest>();

    const searchUser = async (id: string) => {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        const data = response.data;
        if (!data) return null;
        setUSer(data);
    }

    return { user, searchUser }
}

export default useSearchUser;