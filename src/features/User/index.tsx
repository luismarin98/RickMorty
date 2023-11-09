import { Usuarios } from "./Usuario";
import { UsuariosProvider } from "./providers/userProvider";

const UsuariosCDL = () => {
    return <UsuariosProvider>
        <h2>Usuarios</h2>
        <Usuarios />
    </UsuariosProvider>
}

export default UsuariosCDL;