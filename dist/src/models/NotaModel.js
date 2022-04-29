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
const NotaRepository_1 = __importDefault(require("../repository/NotaRepository"));
const uuid_1 = require("uuid");
const masks_1 = require("../utils/masks");
var NotaModel = {};
NotaModel.getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield NotaRepository_1.default.Listar();
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
NotaModel.getByPk = (notaId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield NotaRepository_1.default.SelecionarNotaPorId(notaId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
NotaModel.getByEquipamentoFk = (equipamentoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield NotaRepository_1.default.ListarNotaPorEquipamentoId(equipamentoId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
NotaModel.create = (nota) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newNota = {
            id: (0, uuid_1.v4)(),
            equipamentoId: nota.equipamentoId,
            usuarioId: nota.usuarioId,
            descricao: nota.descricao,
            tipo: nota.tipo,
            dataHora: (0, masks_1.converterDataHora)(new Date())
        };
        const retorno = yield NotaRepository_1.default.Cadastrar(newNota);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
NotaModel.update = (nota) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield NotaRepository_1.default.Atualizar(nota);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
NotaModel.delete = (notaId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield NotaRepository_1.default.Deletar(notaId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
exports.default = NotaModel;
