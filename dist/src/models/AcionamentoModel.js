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
const AcionamentoRepository_1 = __importDefault(require("../repository/AcionamentoRepository"));
const uuid_1 = require("uuid");
const masks_1 = require("../utils/masks");
const pub_1 = require("../services/mqtt/pub");
const EventoModel_1 = __importDefault(require("./EventoModel"));
var AcionamentoModel = {};
AcionamentoModel.acionar = (acionamentoId, usuarioId, flag) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield AcionamentoRepository_1.default.Listar();
        let acionamentoState = retorno.find((acio) => acio.id === acionamentoId);
        if ((acionamentoState === null || acionamentoState === void 0 ? void 0 : acionamentoState.tipo) === 0) {
            let buffer = acionamentoState.estado ? false : true;
            (0, pub_1.enviaAcionamento)(acionamentoState.topic, String(buffer));
            EventoModel_1.default.create({
                id: '',
                acionamentoId: acionamentoState.id,
                equipamentoId: acionamentoState.equipamentoId,
                usuarioId: usuarioId,
                dataHora: (0, masks_1.converterDataHora)(new Date())
            });
            if (acionamentoState === null || acionamentoState === void 0 ? void 0 : acionamentoState.estado) {
                yield AcionamentoRepository_1.default.Acionar(Object.assign(Object.assign({}, acionamentoState), { estado: false }));
                return false;
            }
            else {
                yield AcionamentoRepository_1.default.Acionar(Object.assign(Object.assign({}, acionamentoState), { estado: true }));
                return true;
            }
        }
        else if ((acionamentoState === null || acionamentoState === void 0 ? void 0 : acionamentoState.tipo) === 1) {
            EventoModel_1.default.create({
                id: '',
                acionamentoId: acionamentoState.id,
                equipamentoId: acionamentoState.equipamentoId,
                usuarioId: usuarioId,
                dataHora: (0, masks_1.converterDataHora)(new Date()),
            });
            let retorno = yield AcionamentoRepository_1.default.Acionar(Object.assign(Object.assign({}, acionamentoState), { estado: false, flag: flag }));
            if (retorno)
                (0, pub_1.enviaAcionamento)(acionamentoState.topic, flag);
            return false;
        }
    }
    catch (err) {
        throw err.message;
    }
});
AcionamentoModel.getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield AcionamentoRepository_1.default.Listar();
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
AcionamentoModel.getByPk = (acionamentoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield AcionamentoRepository_1.default.SelecionarAcionamentoPorId(acionamentoId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
AcionamentoModel.getByEquipamentoFk = (equipamentoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield AcionamentoRepository_1.default.ListarAcionamentosPorEquipamentoId(equipamentoId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
AcionamentoModel.create = (acionamento) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newAcionamento = {
            id: (0, uuid_1.v4)(),
            equipamentoId: acionamento.equipamentoId,
            nome: acionamento.nome,
            topic: `${acionamento.equipamentoId}/${acionamento.topic}`,
            estado: false,
            tipo: acionamento.tipo,
            flag: acionamento.flag,
            dataCadastro: (0, masks_1.converterDataHora)(new Date())
        };
        const retorno = yield AcionamentoRepository_1.default.Cadastrar(newAcionamento);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
AcionamentoModel.update = (acionamento) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield AcionamentoRepository_1.default.Atualizar(acionamento);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
AcionamentoModel.delete = (acionamentoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield AcionamentoRepository_1.default.Deletar(acionamentoId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
exports.default = AcionamentoModel;
