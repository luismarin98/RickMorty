import { Usuarios } from "./routes/UsuarioList/Usuario";
import { UsuariosProvider } from "./providers/userProvider";

const UsuariosCDL = () => {
    return <UsuariosProvider>
        <Usuarios />
    </UsuariosProvider>
}

export default UsuariosCDL;