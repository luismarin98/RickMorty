import { useState } from "react";
import axios from "axios";
import { CharacterResponse } from "../request/characterResponse";

const useGetSearch = () => {
  const [info, setInfo] = useState<CharacterResponse>();
  const [infoListSearch, setCharacterSearch] = useState<CharacterResponse[]>([]);

  const getCharacter = async (id_character: string) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id_character}`);

    const data = response.data;
    if (!data?.id) return null;
    console.log(data)

    const { id, name, species, gender, image } = data;
    setInfo({ id, name, species, gender, image });
  };

  const getNameCharacter = async (name_character: string) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name_character}`);
    const data = response.data;

    if (!data.results) return null;
    setCharacterSearch(data.results);
  }

  return { info, getCharacter, getNameCharacter, infoListSearch };
};

export default useGetSearch;
