import { FC, useContext } from 'react';
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';
import CharacterContext, { ICharactercontext } from '../provaider/characterProvaider';

export const SingleCharacterCard: FC = () => {
    const { singleCharacter, idParam } = useContext(CharacterContext) as ICharactercontext;

    return idParam !== '' ? <Card className="mt-6 w-90 flex items-center" color="gray" variant="gradient">
        <CardHeader className="w-40 shadow-md shadow-gray-300">
            <img src={singleCharacter?.image} alt={singleCharacter?.name} />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
            <Typography variant="h5" className="mb-2">{singleCharacter?.name}</Typography>
            <Typography>Genero: {singleCharacter?.gender === 'Male' ? 'Hombre' : 'Mujer'}</Typography>
            <Typography>Especie: {singleCharacter?.species}</Typography>
            <Typography>Id: {singleCharacter?.id}</Typography>
        </CardBody>
    </Card> : null;
}