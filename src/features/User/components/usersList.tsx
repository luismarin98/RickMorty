import { FC, useContext } from 'react'
import UsuariosContext, { IUsuariosContext } from '../providers/userProvider'

const CardUsers: FC = () => {
    const { usuariosList } = useContext(UsuariosContext) as IUsuariosContext;
    
    if (!usuariosList) return <div>No hay usuarios en la DB</div>

    return <div>
        {
            usuariosList.map((data) => <div key={data.nombre}>
                <p>ID: {data.id}</p>
                <p>Nombres: {data.nombre}</p>
                <p>Apellidos: {data.apellido}</p>
            </div>)
        }
    </div>
}

export default CardUsers;