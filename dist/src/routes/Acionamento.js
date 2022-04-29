"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes_acionamentos = void 0;
const express_1 = require("express");
const AcionamentoController_1 = __importDefault(require("../controller/AcionamentoController"));
const token_1 = require("../middleware/token");
exports.routes_acionamentos = (0, express_1.Router)();
// routes_acionamentos.get('/:id', verifyJWT, AcionamentoController.Acionar); 
exports.routes_acionamentos.get('/acionar/:id/:usuarioId/:flag', token_1.verifyJWT, AcionamentoController_1.default.Acionar);
exports.routes_acionamentos.get('/:id', token_1.verifyJWT, AcionamentoController_1.default.SelecionarAcionamentoPorId);
exports.routes_acionamentos.get('/equipamentoId/:id', token_1.verifyJWT, AcionamentoController_1.default.ListarAcionamentosPorEquipamentoId);
exports.routes_acionamentos.get('/', token_1.verifyJWT, AcionamentoController_1.default.ListarAcionamentos);
exports.routes_acionamentos.post('/', token_1.verifyJWT, AcionamentoController_1.default.Cadastrar);
exports.routes_acionamentos.put('/', token_1.verifyJWT, AcionamentoController_1.default.Atualizar);
exports.routes_acionamentos.delete('/:id', token_1.verifyJWT, AcionamentoController_1.default.Deletar);
