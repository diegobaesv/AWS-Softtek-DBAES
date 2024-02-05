
import { IUsuarioPort } from "../../ports/IUsuario.port";
import { Usuario } from "../models/usuario.model";

export class UsuarioService {
    constructor(private usuarioPort: IUsuarioPort) {}

    async listarUsuarios(): Promise<Usuario[]> {
        return this.usuarioPort.listarUsuarios();
    }

    async crearUsuario(usuario: Usuario): Promise<void> {
        return this.usuarioPort.crearUsuario(usuario);
    }
}