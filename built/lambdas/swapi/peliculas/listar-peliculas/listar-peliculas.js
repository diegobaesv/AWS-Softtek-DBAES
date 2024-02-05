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
const swapi_1 = require("../../../../api/swapi");
const translate_util_1 = require("../../../../utils/translate.util");
const listarPeliculas = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield swapi_1.default.get('/films');
        const peliculas = respuesta.data.results.map((pelicula) => {
            return (0, translate_util_1.traducirObjeto)(pelicula);
        });
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
