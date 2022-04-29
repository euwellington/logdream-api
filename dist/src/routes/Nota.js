"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes_notas = void 0;
const express_1 = require("express");
const NotaController_1 = __importDefault(require("../controller/NotaController"));
const token_1 = require("../middleware/token");
exports.routes_notas = (0, express_1.Router)();
exports.routes_notas.get('/', token_1.verifyJWT, NotaController_1.default.ListarNotas);
exports.routes_notas.get('/:id', token_1.verifyJWT, NotaController_1.default.SelecionarNotaPorId);
exports.routes_notas.get('/equipamento/:id', token_1.verifyJWT, NotaController_1.default.ListarNotasPorEquipamentoId);
exports.routes_notas.post('/', token_1.verifyJWT, NotaController_1.default.Cadastrar);
exports.routes_notas.put('/', token_1.verifyJWT, NotaController_1.default.Atualizar);
exports.routes_notas.delete('/:id', token_1.verifyJWT, NotaController_1.default.Deletar);
