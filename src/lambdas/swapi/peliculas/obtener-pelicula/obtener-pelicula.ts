import { error } from "console";
import swapi from "../../../../api/swapi";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Pelicula } from "../../../../models/pelicula.model";



export const obtenerPelicula = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const id = event.pathParameters?.id;
        const respuesta = await swapi.get(`/films/${id}`);

        const _pel: any = respuesta.data;
        const pelicula: Pelicula = {
            titulo: _pel.title,
            id_episodio: _pel.episode_id,
            texto_apertura: _pel.opening_crawl,
            director: _pel.director,
            productor: _pel.producer,
            fecha_lanzamiento: _pel.release_date
        }

        return  {
            statusCode: respuesta.status,
            body: JSON.stringify(pelicula)
            
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



