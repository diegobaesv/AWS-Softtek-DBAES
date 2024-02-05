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
exports.crearUsuario = void 0;
const uuid_1 = require("uuid");
const crearUsuario = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AWS = require('aws-sdk');
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const { documentoIdentidad, nombres, apellidoPaterno, apellidoMaterno } = JSON.parse(event.body || '');
        const id = (0, uuid_1.v4)();
        const usuario = {
            id,
            nombres,
            apellidoMaterno,
            apellidoPaterno,
            documentoIdentidad
        };
        yield dynamodb.put({
            TableName: 'UsersTable2',
            Item: usuario
        }).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ respuesta: "Insertado Correctamente" })
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
exports.crearUsuario = crearUsuario;
