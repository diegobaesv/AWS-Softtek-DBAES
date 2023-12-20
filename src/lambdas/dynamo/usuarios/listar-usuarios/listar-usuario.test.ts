import { APIGatewayProxyEvent } from 'aws-lambda';
import { listarUsuarios } from './listar-usuarios';

jest.mock('aws-sdk', () => {
  const mockDynamoDBDocumentClient = {
    scan: jest.fn().mockReturnThis(),
    promise: jest.fn().mockResolvedValue({ Items: [] })
  };
  return {
    DynamoDB: {
      DocumentClient: jest.fn(() => mockDynamoDBDocumentClient)
    }
  };
});

describe('listarUsuarios', () => {
  it('debería listar usuarios correctamente', async () => {
    const event: APIGatewayProxyEvent = {} as any;
    const response = await listarUsuarios(event);

    expect(response.statusCode).toEqual(200);
  });

});
