
import { APIGatewayProxyEvent } from 'aws-lambda';
import { crearUsuario } from './crear-usuario';

jest.mock('aws-sdk', () => {
  const mockDynamoDBDocumentClient = {
    put: jest.fn().mockReturnThis(),
    promise: jest.fn().mockResolvedValue({})
  };
  return {
    DynamoDB: {
      DocumentClient: jest.fn(() => mockDynamoDBDocumentClient)
    }
  };
});

describe('crearUsuario', () => {

  it('debería insertar un usuario correctamente', async () => {
    const event: APIGatewayProxyEvent = {
      body: JSON.stringify({
        documentoIdentidad: '123456789',
        nombres: 'John',
        apellidoPaterno: 'Doe',
        apellidoMaterno: 'Smith'
      }),
    } as any; 

    const response = await crearUsuario(event);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toContain("Insertado Correctamente");
  });


  
});
