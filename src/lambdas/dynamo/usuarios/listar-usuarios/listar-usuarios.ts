import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";


export const listarUsuarios = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const AWS = require('aws-sdk');
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const respuesta = await dynamodb.scan({
            TableName: 'UsersTable',
        }).promise();

        return  {
            statusCode: 200,
            body: JSON.stringify(respuesta.Items)
            
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
