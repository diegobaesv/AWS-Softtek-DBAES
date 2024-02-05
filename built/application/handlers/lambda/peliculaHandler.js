"use strict";
// src/application/handlers/lambda/peliculasHandler.ts
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
exports.obtenerPelicula = exports.listarPeliculas = void 0;
const swapi_adapter_1 = require("../../../infraestructure/api/swapi.adapter");
const pelicula_service_1 = require("../../../core/domain/services/pelicula.service");
const swapiAdapter = new swapi_adapter_1.SwapiAdapter();
const peliculaService = new pelicula_service_1.PeliculaService(swapiAdapter);
const listarPeliculas = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const peliculas = yield peliculaService.listarPeliculas();
    return {
        statusCode: 200,
        body: JSON.stringify(peliculas),
    };
});
exports.listarPeliculas = listarPeliculas;
const obtenerPelicula = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = ((_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.id) || "";
    const pelicula = yield peliculaService.obtenerPelicula(id);
    return {
        statusCode: 200,
        body: JSON.stringify(pelicula),
    };
});
exports.obtenerPelicula = obtenerPelicula;
