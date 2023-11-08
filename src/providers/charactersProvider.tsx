import { createContext, ReactNode } from 'react';
import { CharacterResponse } from '../request/characterResponse';
import useGetCharacters from '../hooks/useCharacters';

export interface ICharacterContext { character: CharacterResponse[] | undefined }

const CharacterContext = createContext({});

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
    const { character } = useGetCharacters();

    const storage: ICharacterContext = { character };

    return <CharacterContext.Provider value={storage}>{children}</CharacterContext.Provider>
}

export default CharacterContext;