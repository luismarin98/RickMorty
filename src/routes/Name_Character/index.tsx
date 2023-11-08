import { FC } from 'react';
import FormNameSearch from '../../components/FormNameSearch';
import { SearchProvider } from '../../providers/searchProviders';
import { CharacterName } from '../../request/characterResponse';
import { FormProvider, useForm } from 'react-hook-form';
import ArraySearchCharacter from '../../components/CardSearchName';

const NameCharacter: FC = () => {
    const initialSateForm: CharacterName = { NAME: "" };

    const method = useForm<CharacterName>({ defaultValues: initialSateForm });

    return (<div className='flex flex-col gap-1 items-center justify-center'>
        <h2>Obtener Personajes por nombres</h2>
        <SearchProvider>
            <FormProvider {...method}>
                <div className='flex flex-col gap-1'>
                    <FormNameSearch />
                    <ArraySearchCharacter />
                </div>
            </FormProvider>
        </SearchProvider>
    </div>)
}

export default NameCharacter;