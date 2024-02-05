// src/infrastructure/api/SwapiAdapter.ts

import axios from 'axios';
import { Pelicula } from "../../core/domain/models/pelicula.model";
import { IPeliculaPort } from '../../core/ports/IPelicula.port';
import { traducirObjeto } from '../../utils/translate.util';

export class SwapiAdapter implements IPeliculaPort {
    async listarPeliculas(): Promise<Pelicula[]> {
        const response = await axios.get('https://swapi.py4e.com/api/films');
        return response.data.results.map((film: any) => {
            return traducirObjeto(film)
        });
    }
    async obtenerPelicula(id: string): Promise<Pelicula | null> {
        try {
            const response = await axios.get(`https://swapi.py4e.com/api/films/${id}`);
            const film = response.data;
            return traducirObjeto(film);
        } catch (error) {
            return null;
        }
    }

}
