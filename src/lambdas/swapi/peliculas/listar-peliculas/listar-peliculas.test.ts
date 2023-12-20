import { APIGatewayProxyEvent } from 'aws-lambda';
import { listarPeliculas } from './listar-peliculas'; 

/*jest.mock('../../../api/swapi', () => {
  return {
    get: jest.fn().mockResolvedValue({
      status: 200,
      data: { results: [] }
    })
  };
});*/

describe('listarPeliculas', () => {
  it('debería listar películas correctamente', async () => {
    const event: APIGatewayProxyEvent = {} as any;
    const response = await listarPeliculas(event);

    expect(response.statusCode).toEqual(200);
  });

});
