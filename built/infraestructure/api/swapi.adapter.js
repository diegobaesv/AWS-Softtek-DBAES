"use strict";
// src/infrastructure/api/SwapiAdapter.ts
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
exports.SwapiAdapter = void 0;
const axios_1 = require("axios");
const translate_util_1 = require("../../utils/translate.util");
class SwapiAdapter {
    listarPeliculas() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get('https://swapi.py4e.com/api/films');
            return response.data.results.map((film) => {
                return (0, translate_util_1.traducirObjeto)(film);
            });
        });
    }
    obtenerPelicula(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`https://swapi.py4e.com/api/films/${id}`);
                const film = response.data;
                return (0, translate_util_1.traducirObjeto)(film);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.SwapiAdapter = SwapiAdapter;
