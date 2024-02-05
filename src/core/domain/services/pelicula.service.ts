import { IPeliculaPort } from "../../ports/IPelicula.port";
import { Pelicula } from "../models/pelicula.model";

export class PeliculaService {
    private peliculaPort: IPeliculaPort;

    constructor(peliculaPort: IPeliculaPort) {
        this.peliculaPort = peliculaPort;
    }

    async listarPeliculas(): Promise<Pelicula[]> {
        return await this.peliculaPort.listarPeliculas();
    }

    async obtenerPelicula(id: string): Promise<Pelicula | null> {
        return await this.peliculaPort.obtenerPelicula(id);
    }
}