import { FC, useContext } from 'react';
import SearchContext, { ISearchContext } from '../providers/searchProviders';

const ArraySearchCharacter: FC = () => {
    const { infoList } = useContext(SearchContext) as ISearchContext;

    if (!infoList) return <div>No hay Resultados</div>

    return <div className='grid tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 gap-1'>
        {
            infoList.map((data) => <div key={data.name} className='flex p-2 flex-row items-center gap-2 shadow-lg shadow-stone-500 rounded-lg dark:bg-slate-800 dark:text-white'>
                <img src={data.image} alt={data.name} width={100} className='rounded-lg' />
                <div>
                    <p><strong>Id:</strong> {data.id}</p>
                    <p><strong>Nombre:</strong> {data.name}</p>
                    <p><strong>Genero:</strong> {data.gender === null ? null : data?.gender === 'Male' ? 'Hombre' : 'Mujer'}</p>
                    <p><strong>Especie:</strong> {data.species}</p>
                </div>
            </div>)
        }
    </div>
}

export default ArraySearchCharacter;