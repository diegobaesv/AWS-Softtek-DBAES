import { error } from "console";
import swapi from "../../../../api/swapi";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Pelicula } from "../../../../models/pelicula.model";



export const listarPeliculas = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const respuesta = await swapi.get('/films');
        const peliculas: Pelicula[] = respuesta.data.results.map((pelicula: any) => ({
            titulo: pelicula.title,
            id_episodio: pelicula.episode_id,
            texto_apertura: pelicula.opening_crawl,
            director: pelicula.director,
            productor: pelicula.producer,
            fecha_lanzamiento: pelicula.release_date
        }));

        return  {
            statusCode: respuesta.status,
            body: JSON.stringify(peliculas)
            
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



