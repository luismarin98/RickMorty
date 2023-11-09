import { FC, useContext } from 'react'
import UsuariosContext, { IUsuariosContext } from '../providers/userProvider'

const CardUsers: FC = () => {
    const { userData } = useContext(UsuariosContext) as IUsuariosContext;

    if (!userData) return null
    return <div className='flex p-2 flex-col gap-1 justify-center shadow-lg shadow-stone-500 rounded-lg bg-stone-100 dark:bg-slate-800 dark:text-white'>
        <p><strong>ID:</strong>{userData.id}</p>
        <p><strong>Nombre:</strong>{userData.nombre}</p>
        <p><strong>Apellido:</strong>{userData.apellido}</p>
    </div>
}

export default CardUsers;