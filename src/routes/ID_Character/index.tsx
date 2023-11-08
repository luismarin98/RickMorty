import axios from 'axios';
import { CharacterInfo } from '../../domain/CharacterResponse';
import { useState, ChangeEvent, useEffect } from 'react';

export default function ID_Character() {
    const [chInfo, setChInfo] = useState<CharacterInfo>();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { handleSearch(event.target.value) }

    const handleSearch = async (value: string) => {
        await axios.get(`https://rickandmortyapi.com/api/character/${value}`).then((response) => {
            if (!response.data) return null;
            setChInfo(response.data);
        });
    }

    useEffect(() => { document.title = 'Busqueda por ID' }, [])

    return <div className='flex flex-col gap-2 justify-center items-center'>
        <form>
            <input type='text' className='text-center border-solid rounded-sm border-2 p-1' onChange={handleChange} />
        </form>
        {
            !chInfo?.name ? "No hay resultados" : <div className='flex p-2 flex-row items-center gap-2 w-95 shadow-lg shadow-stone-300 rounded-lg'>
                <img src={chInfo?.image} alt={chInfo?.name} width={100} className='rounded-lg' />
                <div>
                    <p><strong>Nombre:</strong>{chInfo?.name}</p>
                    <p><strong>Genero:</strong> {chInfo.gender}</p>
                    <p><strong>Especie:</strong> {chInfo.species}</p>
                </div>
            </div>
        }
    </div>
}