import { useContext } from 'react';
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';
import CharacterContext, { ICharactercontext } from '../provaider/characterProvaider';
import { SingleCharacterCard } from './singleCharacterCard';

export const CharactersList = () => {
    const { charactersParam, idParam } = useContext(CharacterContext) as ICharactercontext;

    return <div className='flex flex-row flex-wrap gap-4 items-center justify-center'>
        {
            idParam !== '' ? <div className='flex flex-col gap-3 items-center bg-gray-300 p-5 rounded-lg'>
                <Typography variant='h5' className='mb-2'>Busqueda por ID</Typography>
                <SingleCharacterCard />
            </div> : ''
        }
        {
            charactersParam?.map((data) => <div key={data.id}>
                <Card className="mt-6 w-90 flex items-center" color="gray" variant="gradient">
                    <CardHeader className="w-40 shadow-md shadow-gray-300">
                        <img src={data.image} alt={data.name} />
                    </CardHeader>
                    <CardBody className="relative py-14 px-6 md:px-12">
                        <Typography variant="h5" className="mb-2">{data.name}</Typography>
                        <Typography>Genero: {data.gender === 'Male' ? 'Hombre' : 'Mujer'}</Typography>
                        <Typography>Especie: {data.species}</Typography>
                        <Typography>Id: {data.id}</Typography>
                    </CardBody>
                </Card>
            </div>)
        }
    </div>
}