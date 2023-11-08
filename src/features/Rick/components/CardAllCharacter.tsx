import { FC, useContext } from 'react';
import CharacterContext, { ICharacterContext } from '../providers/charactersProvider';

const CardCharater: FC = () => {
    const { character } = useContext(CharacterContext) as ICharacterContext;

    if (!character) return <div>No hay resultados</div>;

    return <div className='grid tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 gap-1 bg-stone-100'>
        {
            character.map((data) => <div key={data.name} className='flex p-2 flex-row items-center gap-2 shadow-lg shadow-stone-500 rounded-lg dark:bg-slate-800 dark:text-white'>
                <img src={data?.image} alt={data?.name} width={100} className='rounded-lg' />
                <div>
                    <p><strong>Nombre:</strong> {data?.name}</p>
                    <p><strong>Genero:</strong> {data?.gender === null ? null : data?.gender === 'Male' ? 'Hombre' : 'Mujer'}</p>
                    <p><strong>Especie:</strong> {data?.species}</p>
                </div>
            </div>)
        }
    </div>
}

export default CardCharater;