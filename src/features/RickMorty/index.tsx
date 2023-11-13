import { FormProvider, useForm } from 'react-hook-form';
import { CharacterResponse } from './domain/characterRequest';
import { CharacterProvaider } from './provaider/characterProvaider';
import { CharactersList } from './components/charactersList';
import { CharactersForm } from './components/formSearch';

const RickMorty = () => {
    const initialStateForm: CharacterResponse = { id: '', name: '', gender: '', species: '', image: '' }

    const methods = useForm<CharacterResponse>({ defaultValues: initialStateForm });

    return <CharacterProvaider>
        <FormProvider {...methods}>
            <div className='flex flex-col gap-2 items-center m-2'>
                <CharactersForm />
                <CharactersList />
            </div>
        </FormProvider>
    </CharacterProvaider>
}

export default RickMorty;