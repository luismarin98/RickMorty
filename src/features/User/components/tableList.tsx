import { FC, useContext } from "react";
import { useFormContext } from "react-hook-form";
import UsuariosContext, { IUsuariosContext } from "../providers/userProvider";

const TableList: FC = () => {
    const { usuariosList } = useContext(UsuariosContext) as IUsuariosContext;

    if (!usuariosList) return <div>Aun no hay datos en la base de datos</div>

    return <div className="grid tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 gap-1">
        <table>
            <thead>
                <th>
                    <tr>ID</tr>
                    <tr>Nombres</tr>
                    <tr>Apellidos</tr>
                </th>
            </thead>
            <tbody>
                {usuariosList.map(data => <th>
                    <tr>{data.id}</tr>
                    <tr>{data.nombre}</tr>
                    <tr>{data.apellido}</tr>
                </th>)}
            </tbody>
        </table>
    </div>
}

export default TableList;