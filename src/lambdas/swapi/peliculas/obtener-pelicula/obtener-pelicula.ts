import swapi from "../../../../api/swapi";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Pelicula } from "../../../../models/pelicula.model";
import { traducirObjeto } from "../../../../utils/translate.util";



export const obtenerPelicula = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        
        const id = event.pathParameters?.id;
        const respuesta = await swapi.get(`/films/${id}`);

        const _pel: any = respuesta.data;
        
        const peliculaTraducida: Pelicula = traducirObjeto(_pel);

        return  {
            statusCode: respuesta.status,
            body: JSON.stringify(peliculaTraducida)
            
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



