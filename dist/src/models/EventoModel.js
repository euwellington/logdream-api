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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventoRepository_1 = __importDefault(require("../repository/EventoRepository"));
const uuid_1 = require("uuid");
const masks_1 = require("../utils/masks");
var EventoModel = {};
EventoModel.getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield EventoRepository_1.default.Listar();
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
EventoModel.getByPk = (eventoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield EventoRepository_1.default.SelecionarEventoPorId(eventoId);
        return retorno[0];
    }
    catch (err) {
        throw err.message;
    }
});
EventoModel.getByEquipamentoFk = (equipamentoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield EventoRepository_1.default.ListarEventoPorEquipamentoId(equipamentoId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
EventoModel.create = (evento) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newEvento = {
            id: (0, uuid_1.v4)(),
            usuarioId: evento.usuarioId,
            equipamentoId: evento.equipamentoId,
            acionamentoId: evento.acionamentoId,
            dataHora: (0, masks_1.converterDataHora)(new Date())
        };
        const retorno = yield EventoRepository_1.default.Salvar(newEvento);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
EventoModel.delete = (eventoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield EventoRepository_1.default.Deletar(eventoId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
exports.default = EventoModel;
