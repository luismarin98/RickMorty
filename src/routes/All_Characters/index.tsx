import { FC } from 'react';
import CardCharater from '../../features/Rick/components/CardAllCharacter';
import { CharacterProvider } from '../../features/Rick/providers/charactersProvider';

const AllCharacters: FC = () => {
    return <div className='flex flex-col gap-1 items-center justify-center'>
        <h1 className='text-2xl'>Todos los personajes</h1>
        <CharacterProvider>
            <CardCharater />
        </CharacterProvider>
    </div>
}

export default AllCharacters;