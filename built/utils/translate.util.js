"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traducirObjeto = void 0;
const diccionario = {
    "episode_id": "id_episodio",
    "title": "titulo",
    "director": "director",
    "producer": "productor",
    "opening_crawl": "texto_apertura",
    "release_date": "fecha_lanzamiento",
    "characters": "personajes",
    "planets": "planetas",
    "starships": "naves_espaciales",
    "vehicles": "vehiculos",
    "species": "especies",
    "created": "creado",
    "edited": "editado",
    "url": "url"
};
function traducirObjeto(objeto) {
    const objetoTraducido = {};
    for (const [clave, valor] of Object.entries(objeto)) {
        const claveTraducida = diccionario[clave] || clave;
        objetoTraducido[claveTraducida] = valor;
    }
    return objetoTraducido;
}
exports.traducirObjeto = traducirObjeto;
