"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes_eventos = void 0;
const express_1 = require("express");
const EventoController_1 = __importDefault(require("../controller/EventoController"));
const token_1 = require("../middleware/token");
exports.routes_eventos = (0, express_1.Router)();
exports.routes_eventos.get('/', token_1.verifyJWT, EventoController_1.default.ListarEventos);
exports.routes_eventos.get('/:id', token_1.verifyJWT, EventoController_1.default.SelecionarEventoPorId);
exports.routes_eventos.get('/equipamento/:id', token_1.verifyJWT, EventoController_1.default.ListarEventosPorEquipamentoId);
exports.routes_eventos.post('/', token_1.verifyJWT, EventoController_1.default.Cadastrar);
exports.routes_eventos.delete('/:id', token_1.verifyJWT, EventoController_1.default.Deletar);
