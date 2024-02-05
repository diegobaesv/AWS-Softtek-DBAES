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
exports.crearUsuario = exports.listarUsuarios = void 0;
const usuario_service_1 = require("../../../core/domain/services/usuario.service");
const dynamo_adapter_1 = require("../../../infraestructure/db/dynamo.adapter");
const dynamoAdapter = new dynamo_adapter_1.DynamoAdapter();
const usuarioService = new usuario_service_1.UsuarioService(dynamoAdapter);
const listarUsuarios = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuarioService.listarUsuarios();
    return {
        statusCode: 200,
        body: JSON.stringify(usuarios),
    };
});
exports.listarUsuarios = listarUsuarios;
const crearUsuario = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = JSON.parse(event.body || '{}');
    yield usuarioService.crearUsuario(usuario);
    return {
        statusCode: 201,
        body: JSON.stringify({ message: "Usuario creado con éxito" }),
    };
});
exports.crearUsuario = crearUsuario;
