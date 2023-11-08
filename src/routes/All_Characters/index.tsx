import axios from "axios";
import { useEffect, useState } from "react";
import { CharacterInfo } from "../../domain/CharacterResponse";

export default function All_Characters() {
    const [info, setInfo] = useState<CharacterInfo[]>([]);

    const getCharacters = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character').then((response) => {
            if (!response.data) return null;
            setInfo(response.data?.results);
        })
        return response;
    }

    useEffect(() => {
        getCharacters();
        document.title = 'Personajes'
    }, [])

    return <div className="grid grid-cols-4 gap-4 m-2">
        {
            info.map((ch) => <div key={ch.name} className="flex p-2 flex-row items-center gap-2 w-45 shadow-lg shadow-stone-300 rounded-lg">
                <img src={ch.image} alt={ch.name} width={100} className="rounded-lg"/>
                <div>
                    <p><strong>Nombres:</strong> {ch.name}</p>
                    <p><strong>Genero:</strong> {!ch.gender ? null : ch.gender === 'Male' ? 'Hombre' : 'Mujer'}</p>
                    <p><strong>Especie:</strong> {ch.species}</p>
                </div>
            </div>)
        }
    </div>
}