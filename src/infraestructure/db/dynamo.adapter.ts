import AWS = require('aws-sdk');
import { IUsuarioPort } from '../../core/ports/IUsuario.port';
import { Usuario } from '../../core/domain/models/usuario.model';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export class DynamoAdapter implements IUsuarioPort {
    async listarUsuarios(): Promise<Usuario[]> {
        const params = {
            TableName: "UsersTable3",
        };
        const data = await dynamoDb.scan(params).promise();
        return data.Items as Usuario[];
    }

    async crearUsuario(usuario: Usuario): Promise<void> {
        const params = {    
            TableName: "UsersTable3",
            Item: usuario,
        };
        await dynamoDb.put(params).promise();
    }
}