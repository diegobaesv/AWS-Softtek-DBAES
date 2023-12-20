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
const listar_peliculas_1 = require("./listar-peliculas");
/*jest.mock('../../../api/swapi', () => {
  return {
    get: jest.fn().mockResolvedValue({
      status: 200,
      data: { results: [] }
    })
  };
});*/
describe('listarPeliculas', () => {
    it('debería listar películas correctamente', () => __awaiter(void 0, void 0, void 0, function* () {
        const event = {};
        const response = yield (0, listar_peliculas_1.listarPeliculas)(event);
        expect(response.statusCode).toEqual(200);
    }));
});
