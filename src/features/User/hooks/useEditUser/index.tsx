import { useState } from "react";
import { UserRequest } from "../../domain/userRequest";
import axios from "axios";

const useEditUser = () => {
  const [data, setDataEdit] = useState<UserRequest>();

  const editUser = async () => {
    await axios
        .put(`http://localhost:3000/users/${data?.id}`, { ...data })
        .then((res) => {
          if (res.status === 200) return alert("Usuario editado con exito");
          if (res.status === 404) return alert('Algo a pasado, intenta nuevamente');
        })
        .catch((err) => {
          console.error(err);
        });
  };

  return { editUser, setDataEdit };
};

export default useEditUser;
