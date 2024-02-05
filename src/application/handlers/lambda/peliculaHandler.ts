// src/application/handlers/lambda/peliculasHandler.ts

import { APIGatewayProxyHandler } from 'aws-lambda';
import { SwapiAdapter } from '../../../infraestructure/api/swapi.adapter';
import { PeliculaService } from '../../../core/domain/services/pelicula.service';


const swapiAdapter = new SwapiAdapter();
const peliculaService = new PeliculaService(swapiAdapter);

export const listarPeliculas: APIGatewayProxyHandler = async (event) => {
    const peliculas = await peliculaService.listarPeliculas();
    return {
        statusCode: 200,
        body: JSON.stringify(peliculas),
    };
};

export const obtenerPelicula: APIGatewayProxyHandler = async (event) => {
    const id = event.pathParameters?.id || "";
    const pelicula = await peliculaService.obtenerPelicula(id);
    return {
        statusCode: 200,
        body: JSON.stringify(pelicula),
    };
};
