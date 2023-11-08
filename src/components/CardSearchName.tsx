import { FC, useContext } from 'react';
import SearchContext, { ISearchContext } from '../providers/searchProviders';

const ArraySearchCharacter: FC = () => {
    const { infoList } = useContext(SearchContext) as ISearchContext;

    if (!infoList) return <div>No hay Resultados</div>

    return <div className='grid gap-4 grid-cols-3 grid-rows-3 m-5'>
        {
            infoList.map((data) => <div key={data.name} className='flex p-2 flex-row items-center gap-2 shadow-lg shadow-stone-300 rounded-lg'>
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

export default ArraySearchCharacter;