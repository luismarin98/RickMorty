import { useState } from "react";
import axios from "axios";
import { CharacterResponse } from "../request/characterResponse";

const useGetSearch = () => {
  const [info, setInfo] = useState<CharacterResponse>();

  const getCharacter = async (id_character: string) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id_character}`
    );

    const data = response.data;
    if (!data?.id) return null;

    const { id, name, species, gender, image } = data;
    setInfo({ id, name, species, gender, image });
  };

  return { info, getCharacter };
};

export default useGetSearch;
