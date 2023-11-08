import { useEffect, useState } from 'react';
import { CharacterResponse } from '../request/characterResponse';
import axios from 'axios';

const useGetCharacters = () => {
    const [character, setCharacter] = useState<CharacterResponse[]>([]);
    const getAllCharacters = "https://rickandmortyapi.com/api/character";

    useEffect(() => {
        getcharacter();
    }, []);

    const getcharacter = async () => {
        const response = await axios.get(getAllCharacters);
        const data = response.data;
        setCharacter(data.results);
    }

    return { character };
}

export default useGetCharacters;