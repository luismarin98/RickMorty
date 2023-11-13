import { createContext, ReactNode, Dispatch, SetStateAction } from "react";
import { CharacterResponse } from "../domain/characterRequest";
import { useSearchCharacter } from "../hooks";

export interface ICharactercontext {
    charactersParam: CharacterResponse[] | undefined;
    singleCharacter: CharacterResponse | undefined;
    idParam: string | null;

    setGenderParam: Dispatch<SetStateAction<string>>;
    setIdParm: Dispatch<SetStateAction<string>>;
    setNameParam: Dispatch<SetStateAction<string>>;
    setSpeciesParam: Dispatch<SetStateAction<string>>

    runFilterCharacters: () => void;
    runGetSingleCharacter: () => void;
}

const CharacterContext = createContext({});

export const CharacterProvaider = ({ children }: { children: ReactNode }) => {

    const {
        charactersParam,
        runFilterCharacters,
        setGenderParam,
        setIdParm,
        setNameParam,
        singleCharacter,
        runGetSingleCharacter,
        setSpeciesParam,
        idParam,
    } = useSearchCharacter();

    const storage: ICharactercontext = {
        charactersParam,
        runFilterCharacters,
        setGenderParam,
        setIdParm,
        setNameParam,
        singleCharacter,
        runGetSingleCharacter,
        setSpeciesParam,
        idParam,
    };

    return <CharacterContext.Provider value={storage}>{children}</CharacterContext.Provider>
}

export default CharacterContext;