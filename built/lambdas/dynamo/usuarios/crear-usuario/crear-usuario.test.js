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
const crear_usuario_1 = require("./crear-usuario");
jest.mock('aws-sdk', () => {
    const mockDynamoDBDocumentClient = {
        put: jest.fn().mockReturnThis(),
        promise: jest.fn().mockResolvedValue({})
    };
    return {
        DynamoDB: {
            DocumentClient: jest.fn(() => mockDynamoDBDocumentClient)
        }
    };
});
describe('crearUsuario', () => {
    it('debería insertar un usuario correctamente', () => __awaiter(void 0, void 0, void 0, function* () {
        const event = {
            body: JSON.stringify({
                documentoIdentidad: '123456789',
                nombres: 'John',
                apellidoPaterno: 'Doe',
                apellidoMaterno: 'Smith'
            }),
        };
        const response = yield (0, crear_usuario_1.crearUsuario)(event);
        expect(response.statusCode).toEqual(200);
        expect(response.body).toContain("Insertado Correctamente");
    }));
});
