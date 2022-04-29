"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes_auth = void 0;
const express_1 = require("express");
const UsuarioController_1 = __importDefault(require("../controller/UsuarioController"));
exports.routes_auth = (0, express_1.Router)();
exports.routes_auth.post('/', UsuarioController_1.default.Auth);
