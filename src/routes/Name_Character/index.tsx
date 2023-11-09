import { FC } from 'react';
import FormNameSearch from '../../features/Rick/components/FormNameSearch';
import { SearchProvider } from '../../features/Rick/providers/searchProviders';
import { CharacterName } from '../../features/Rick/request/characterResponse';
import { FormProvider, useForm } from 'react-hook-form';
import ArraySearchCharacter from '../../features/Rick/components/CardSearchName';

const NameCharacter: FC = () => {
    const initialSateForm: CharacterName = { NAME: "" };

    const method = useForm<CharacterName>({ defaultValues: initialSateForm });

    return (<div className='flex flex-col gap-1 items-center justify-center'>
        <h1 className='text-2xl'>Obtener Personajes por nombres</h1>
        <SearchProvider>
            <FormProvider {...method}>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <FormNameSearch />
                    <ArraySearchCharacter />
                </div>
            </FormProvider>
        </SearchProvider>
    </div>)
}

export default NameCharacter;