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
const AcionamentoScript_1 = __importDefault(require("./scripts/AcionamentoScript"));
const util_1 = __importDefault(require("util"));
const database_1 = require("../database");
class AcionamentoRepository {
    constructor() {
        this.query = util_1.default.promisify(database_1.connection.query).bind(database_1.connection);
    }
    Acionar(acionamento) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(AcionamentoScript_1.default.Acionar(acionamento));
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    Listar() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(AcionamentoScript_1.default.SelectBase());
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    ListarAcionamentosPorEquipamentoId(equipamentoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(AcionamentoScript_1.default.AcionamentoPorEquipamentoId(equipamentoId));
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    Cadastrar(acionamento) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(AcionamentoScript_1.default.CadastrarAconamento(acionamento));
                if (retorno) {
                    return acionamento;
                }
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    SelecionarAcionamentoPorId(acionamentoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(AcionamentoScript_1.default.SelecionarAcionamentoPorId(acionamentoId));
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    Atualizar(acionamento) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(AcionamentoScript_1.default.AtualizarAcionamento(acionamento));
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    Deletar(acionamentoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(AcionamentoScript_1.default.DeletarAcionamento(acionamentoId));
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
}
exports.default = new AcionamentoRepository();
