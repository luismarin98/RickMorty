import { useState } from "react";
import { UserRequest } from "../domain/userRequest";
import axios from "axios";

const useEditUser = () => {
  const [data, setData] = useState<UserRequest>();

  const searchId = async (param: string) => {
    const response = await axios.get(`http://localhost:3000/users/${param}`);
    if (!response.data) return null;
    setData(response.data);
  };

  const editUser = async () => {
    await axios.put(`http://localhost:3000/users/${data?.id}`, { ...data });
  };

  return { searchId, editUser };
};

export default useEditUser;
