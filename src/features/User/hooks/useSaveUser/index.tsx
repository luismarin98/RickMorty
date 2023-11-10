import { UserRequest } from "../../domain/userRequest";
import axios from "axios";
import { useState } from "react";

const useSaveUser = () => {
  const [data, setDataSave] = useState<UserRequest>();
  //debugger
  const saveUser = async () => {
    const response = await axios.post(`http://localhost:3000/users`, {
      ...data,
    });
    if (response.status === 200) return alert("Usuario guardado con exito");
    console.log(data);
  };

  return { saveUser, setDataSave };
};

export default useSaveUser;
