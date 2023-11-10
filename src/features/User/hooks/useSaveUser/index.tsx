import { UserRequest } from "../../domain/userRequest";
import axios from "axios";

const useSaveUser = () => {
    debugger
    const saveUser = async (params: UserRequest) => {
        await axios.post(`http://localhost:3000/users`, { ...params }).then((res) => {
            if (res.status === 200) return alert('Usuario guardado con exito');
        }).catch((err) => {
            console.error(err);
        });
    }

    return { saveUser }
}

export default useSaveUser;