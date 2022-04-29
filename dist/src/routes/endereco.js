"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes_enderecos = void 0;
const express_1 = require("express");
const EnderecoController_1 = __importDefault(require("../controller/EnderecoController"));
const token_1 = require("../middleware/token");
exports.routes_enderecos = (0, express_1.Router)();
exports.routes_enderecos.get('/', token_1.verifyJWT, EnderecoController_1.default.ListarEnderecos);
exports.routes_enderecos.get('/:id', token_1.verifyJWT, EnderecoController_1.default.SelecionarEnderecoPorId);
exports.routes_enderecos.get('/equipamento/:id', token_1.verifyJWT, EnderecoController_1.default.ListarEnderecoPorEquipamentoId);
exports.routes_enderecos.post('/', token_1.verifyJWT, EnderecoController_1.default.Cadastrar);
exports.routes_enderecos.put('/', token_1.verifyJWT, EnderecoController_1.default.Atualizar);
exports.routes_enderecos.delete('/:id', token_1.verifyJWT, EnderecoController_1.default.Deletar);
