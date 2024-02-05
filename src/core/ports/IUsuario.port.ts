import { Usuario } from "../domain/models/usuario.model";

export interface IUsuarioPort {
    listarUsuarios(): Promise<Usuario[]>;
    crearUsuario(usuario: Usuario): Promise<void>;
}
