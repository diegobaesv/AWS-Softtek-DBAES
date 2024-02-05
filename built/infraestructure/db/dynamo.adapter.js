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
exports.DynamoAdapter = void 0;
const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();
class DynamoAdapter {
    listarUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                TableName: "UsersTable3",
            };
            const data = yield dynamoDb.scan(params).promise();
            return data.Items;
        });
    }
    crearUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                TableName: "UsersTable3",
                Item: usuario,
            };
            yield dynamoDb.put(params).promise();
        });
    }
}
exports.DynamoAdapter = DynamoAdapter;
