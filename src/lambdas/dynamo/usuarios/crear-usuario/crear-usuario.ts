import { APIGatewayProxyEvent, APIGatewayProxyResult, DynamoDBBatchResponse, DynamoDBRecord, DynamoDBStreamEvent, DynamoDBStreamHandler } from "aws-lambda";

import { v4 as uuidv4 } from 'uuid';
import { Usuario } from "../../../../models/usuario.model";

export const crearUsuario = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const AWS = require('aws-sdk');
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        
        const { documentoIdentidad,nombres ,apellidoPaterno ,apellidoMaterno} = JSON.parse(event.body||'');

        const id = uuidv4();

        const usuario: Usuario = {
            id,
            nombres,
            apellidoMaterno,
            apellidoPaterno,
            documentoIdentidad
        }

        await dynamodb.put({
            TableName: 'UsersTable2',
            Item: usuario
        }).promise();

        return  {
            statusCode: 200,
            body: JSON.stringify({respuesta:"Insertado Correctamente"})
            
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: err,
            }),
        };
    }   
};
