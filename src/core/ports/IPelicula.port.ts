import { Pelicula } from "../domain/models/pelicula.model";

export interface IPeliculaPort {
    listarPeliculas(): Promise<Pelicula[]>;
    obtenerPelicula(id: string): Promise<Pelicula | null>;
}