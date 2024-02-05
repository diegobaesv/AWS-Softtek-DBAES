import { APIGatewayProxyHandler } from "aws-lambda";
import { UsuarioService } from "../../../core/domain/services/usuario.service";
import { DynamoAdapter } from "../../../infraestructure/db/dynamo.adapter";

const dynamoAdapter = new DynamoAdapter();
const usuarioService = new UsuarioService(dynamoAdapter);

export const listarUsuarios: APIGatewayProxyHandler = async (event) => {
    const usuarios = await usuarioService.listarUsuarios();
    return {
        statusCode: 200,
        body: JSON.stringify(usuarios),
    };
};

export const crearUsuario: APIGatewayProxyHandler = async (event) => {
    const usuario = JSON.parse(event.body || '{}');
    await usuarioService.crearUsuario(usuario);
    return {
        statusCode: 201,
        body: JSON.stringify({ message: "Usuario creado con éxito" }),
    };
};