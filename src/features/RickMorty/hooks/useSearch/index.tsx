import { useState } from 'react';
import { CharacterResponse } from '../../domain/characterRequest';
import axios from 'axios';

const useSearchCharacter = () => {

    const [charactersParam, setCharactersParam] = useState<CharacterResponse[]>([]);
    const [singleCharacter, setSingleCharacter] = useState<CharacterResponse>();

    const [idParam, setIdParm] = useState<string>("");
    const [nameParam, setNameParam] = useState<string>("");
    const [genderParam, setGenderParam] = useState<string>("");
    const [speciesParam, setSpeciesParam] = useState<string>('');

    const query = `https://rickandmortyapi.com/api/character/${nameParam !== '' ? `?name=${nameParam}` : genderParam !== '' ? `?gender=${genderParam}` : speciesParam !== '' ? `?species=${speciesParam}` : nameParam && genderParam !== '' ? `?name=${nameParam}&gender=${genderParam}` : genderParam && speciesParam !== '' ? `?gender=${genderParam}&species=${speciesParam}` : ''}`;

    const runFilterCharacters = async () => {
        await axios.get(query).then((res) => {
            if (!res.data) return alert('Intenta nuevamente');
            if (res.status === 404) return alert('Puede que no exista ese personaje');
            setCharactersParam(res.data?.results);
        }).catch((err) => {
            console.log(err.response.data);
        });
    }

    const runGetSingleCharacter = async () => {
        if (idParam === '') return null;
        await axios.get(`https://rickandmortyapi.com/api/character/${idParam}`).then((res) => {
            setSingleCharacter(res.data);
        }).catch((err) => {
            console.error(err.response.data);
        })
    }

    return {
        charactersParam,
        singleCharacter,
        idParam,
        setCharactersParam,
        runFilterCharacters,
        setIdParm,
        setNameParam,
        setGenderParam,
        setSpeciesParam,
        runGetSingleCharacter
    }
}

export default useSearchCharacter;