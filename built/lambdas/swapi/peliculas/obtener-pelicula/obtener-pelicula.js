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
exports.obtenerPelicula = void 0;
const swapi_1 = require("../../../../api/swapi");
const translate_util_1 = require("../../../../utils/translate.util");
const obtenerPelicula = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.id;
        const respuesta = yield swapi_1.default.get(`/films/${id}`);
        const _pel = respuesta.data;
        const peliculaTraducida = (0, translate_util_1.traducirObjeto)(_pel);
        return {
            statusCode: respuesta.status,
            body: JSON.stringify(peliculaTraducida)
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
exports.obtenerPelicula = obtenerPelicula;
