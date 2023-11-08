import { FC } from 'react';
import CardCharater from '../../components/CardAllCharacter';
import { CharacterProvider } from '../../providers/charactersProvider';

const AllCharacters: FC = () => {
    return <div>
        <h2>Todos los personajes</h2>
        <CharacterProvider>
            <CardCharater />
        </CharacterProvider>
    </div>
}

export default AllCharacters;