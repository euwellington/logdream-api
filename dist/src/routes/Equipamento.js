"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes_equipamentos = void 0;
const express_1 = require("express");
const EquipamentoController_1 = __importDefault(require("../controller/EquipamentoController"));
const token_1 = require("../middleware/token");
exports.routes_equipamentos = (0, express_1.Router)();
exports.routes_equipamentos.get('/', token_1.verifyJWT, EquipamentoController_1.default.ListarEquipamentos);
exports.routes_equipamentos.get('/:id', token_1.verifyJWT, EquipamentoController_1.default.SelecionarEquipamentoPorId);
exports.routes_equipamentos.post('/', token_1.verifyJWT, EquipamentoController_1.default.Cadastrar);
exports.routes_equipamentos.put('/', token_1.verifyJWT, EquipamentoController_1.default.Atualizar);
exports.routes_equipamentos.delete('/:id', token_1.verifyJWT, EquipamentoController_1.default.Deletar);
