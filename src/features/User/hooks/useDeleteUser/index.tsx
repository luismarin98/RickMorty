import { UserRequest } from "../../domain/userRequest";
import axios from "axios";

const useDeleteUser = () => {
    const deleteUser = async (userData: UserRequest) => {
        await axios.delete(`http://localhost:3000/users/${userData.id}`).then((res) => {
            if (res.status === 200) return alert('Usuario eliminado con exito');
        }).catch((err) => {
            console.error(err);
        });
    }

    return { deleteUser }
}

export default useDeleteUser;