"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const swapi = axios_1.default.create({
    baseURL: 'https://swapi.py4e.com/api'
});
exports.default = swapi;
