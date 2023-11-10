import { useState } from "react";
import axios from "axios";
import { UserRequest } from "../../domain/userRequest";

const useFilterDate = () => {
  const [dateNow, setDateNow] = useState<string | null>("");

  const [rangeUsers, setRangeUsers] = useState<UserRequest[]>([]);

  const runFilter = async () => {
    console.log(dateNow)
    await axios
      .get(`http://localhost:3000/users/?fecha=${dateNow}`)
      .then((res) => {
        if (!res.data) return null;
        if (res.status === 304) return alert('Puede que no hayan usuarios en la base de datos');
        if (res.status === 404) return alert('Intenta nuevamente');
        setRangeUsers(res.data);
        console.log(res.data)
      })
      .catch((err) => console.error(err));
  };

  return {
    dateNow,
    rangeUsers,
    setDateNow,
    runFilter,
  };
};

export default useFilterDate;
