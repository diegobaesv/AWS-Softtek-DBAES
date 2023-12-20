import { APIGatewayProxyEvent } from 'aws-lambda';
import { obtenerPelicula } from './obtener-pelicula';



describe('listarPeliculas', () => {
  it('debería obtener película correctamente', async () => {
    const event: APIGatewayProxyEvent = {
        pathParameters: { id: '4' }
    } as any;
    const response = await obtenerPelicula(event);
    expect(response.statusCode).toEqual(200);
    
  });

});
