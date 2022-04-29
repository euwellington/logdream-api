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
const EquipamentoRepository_1 = __importDefault(require("../repository/EquipamentoRepository"));
const uuid_1 = require("uuid");
const masks_1 = require("../utils/masks");
var EquipamentoModel = {};
EquipamentoModel.getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield EquipamentoRepository_1.default.Listar();
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
EquipamentoModel.getByPk = (EquipamentoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield EquipamentoRepository_1.default.SelecionarEquipamentoPorId(EquipamentoId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
EquipamentoModel.create = (Equipamento) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newEquipamento = {
            id: (0, uuid_1.v4)(),
            nome: Equipamento.nome,
            ip: Equipamento.ip,
            chip: Equipamento.chip,
            versao: Equipamento.versao,
            dataCadastro: (0, masks_1.converterDataHora)(new Date())
        };
        const retorno = yield EquipamentoRepository_1.default.Cadastrar(newEquipamento);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
EquipamentoModel.update = (equipamento) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield EquipamentoRepository_1.default.Atualizar(equipamento);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
EquipamentoModel.delete = (EquipamentoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield EquipamentoRepository_1.default.Deletar(EquipamentoId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
exports.default = EquipamentoModel;
