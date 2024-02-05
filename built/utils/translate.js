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
exports.TranslateUtil = void 0;
const v2_1 = require("@google-cloud/translate/build/src/v2");
const translate = new v2_1.Translate({ projectId: 'aws-rimac', keyFilename: 'AIzaSyBsWPMu9Exg6fcmCHjqwvnubp-5FnsJU1Y' });
class TranslateUtil {
    static traducirTexto(texto, targetLang = 'es') {
        return __awaiter(this, void 0, void 0, function* () {
            const [translation] = yield translate.translate(texto, targetLang);
            return translation;
        });
    }
    static traducirPropiedades(objeto, idiomaDestino = 'es') {
        return __awaiter(this, void 0, void 0, function* () {
            const objetoTraducido = Array.isArray(objeto) ? [] : {};
            for (const [clave, valor] of Object.entries(objeto)) {
                if (typeof valor === 'string') {
                    objetoTraducido[clave] = yield this.traducirTexto(valor, idiomaDestino);
                }
                else if (typeof valor === 'object' && valor !== null) {
                    objetoTraducido[clave] = yield this.traducirPropiedades(valor, idiomaDestino);
                }
                else {
                    objetoTraducido[clave] = valor;
                }
            }
            return objetoTraducido;
        });
    }
}
exports.TranslateUtil = TranslateUtil;
