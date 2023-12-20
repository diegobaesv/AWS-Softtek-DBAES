"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarPeliculas = void 0;
const swapi_1 = require("../../api/swapi");
const listarPeliculas = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield swapi_1.default.get('/films');
        const peliculas = respuesta.data.results.map((pelicula) => ({
            titulo: pelicula.title,
            id_episodio: pelicula.episode_id,
            texto_apertura: pelicula.opening_crawl,
            director: pelicula.director,
            productor: pelicula.producer,
            fecha_lanzamiento: pelicula.release_date
        }));
        return {
            statusCode: respuesta.status,
            body: JSON.stringify(peliculas)
        };
    }
    catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: err,
            }),
        };
    }
});
exports.listarPeliculas = listarPeliculas;
