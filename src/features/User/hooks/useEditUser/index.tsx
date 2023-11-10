import { useState } from "react";
import { UserRequest } from "../../domain/userRequest";
import axios from "axios";

const useEditUser = () => {
  const [data, setData] = useState<UserRequest>();

  const editUser = async (param: UserRequest) => {
    await axios.put(`http://localhost:3000/users/${data?.id}`, { ...param }).then((res) => {
      if (res.status === 200) return alert('Usuario editado con exito');
    }).catch((err) => {
      console.error(err);
    });
  };

  return { editUser, setData };
};

export default useEditUser;
