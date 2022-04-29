"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes_usuario = void 0;
const express_1 = require("express");
const UsuarioController_1 = __importDefault(require("../controller/UsuarioController"));
const token_1 = require("../middleware/token");
exports.routes_usuario = (0, express_1.Router)();
exports.routes_usuario.get('/', token_1.verifyJWT, UsuarioController_1.default.ListarUsuarios);
exports.routes_usuario.get('/:id', token_1.verifyJWT, UsuarioController_1.default.SelecionarUsuarioPorId);
exports.routes_usuario.get('/equipamento/:id', token_1.verifyJWT, UsuarioController_1.default.ListarUsuariosPorEquipamentoId);
exports.routes_usuario.post('/', token_1.verifyJWT, UsuarioController_1.default.Cadastrar);
exports.routes_usuario.put('/', token_1.verifyJWT, UsuarioController_1.default.Atualizar);
exports.routes_usuario.delete('/:id', token_1.verifyJWT, UsuarioController_1.default.Deletar);
