import { FC, useContext, MouseEvent } from 'react'
import { useFormContext, SubmitHandler } from 'react-hook-form'
import CharacterContext, { ICharactercontext } from '../provaider/characterProvaider'
import { CharacterResponse } from '../domain/characterRequest';
import { FormRequest } from '../domain/formRequest';

export const CharactersForm: FC = () => {

    const { runFilterCharacters, setGenderParam, setIdParm, setNameParam, runGetSingleCharacter } = useContext(CharacterContext) as ICharactercontext;
    const { reset, getValues, register, handleSubmit } = useFormContext<CharacterResponse>();

    const submit: SubmitHandler<FormRequest> = (data: FormRequest) => {
        if (!data) return null;

        const valueParam = { ...getValues() };

        if (valueParam.id !== '') {
            setIdParm(valueParam.id);
            runGetSingleCharacter();
        } else if ((valueParam.name || valueParam.gender || valueParam.species) !== '') {
            setNameParam(valueParam.name);
            setGenderParam(valueParam.gender);
            runFilterCharacters();
        }

        reset();
    }

    const handle_ShowCharacters = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        runFilterCharacters();
        reset();
    }

    return <div className='bg-white dark:bg-slate-800 rounded-lg px-5 py-3 ring-1 ring-slate-900/5 shadow-xl flex flex-row gap-2 items-center justify-center flex-wrap'>
        <form className='flex flex-row flex-wrap gap-2' onSubmit={handleSubmit(submit)}>
            <input type='text' className='border-2 border-gray-400 p-1 text-center w-30 rounded-md' placeholder='Nombre' {...register('name')} />
            <input type='text' className='border-2 border-gray-400 p-1 text-center w-30 rounded-md' placeholder='ID' {...register('id')} />
            <label className='flex flex-row gap-0.5 items-center'>
                <p>Genero:</p>
                <select
                    className="p-1 rounded-md text-center text-black"
                    {...register('gender')}
                >
                    <option value='male'>Hombre</option>
                    <option value="female">Mujer</option>
                </select>
            </label>
            <input type='submit' value='Filtrar' className="border rounded-lg p-2 bg-blue-300 focus:bg-blue-400 dark:bg-slate-200 dark:hover:bg-slate-300 flex items-center text-black" />
        </form>
        <button onClick={handle_ShowCharacters} className="border rounded-lg p-2 bg-blue-300 hover:bg-blue-400 dark:bg-slate-200 dark:hover:bg-slate-300 flex items-center text-black">Mostrar personajes</button>
    </div >
}