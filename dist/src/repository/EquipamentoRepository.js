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
const EquipamentoScript_1 = __importDefault(require("./scripts/EquipamentoScript"));
const util_1 = __importDefault(require("util"));
const database_1 = require("../database");
class EquipamentoRepository {
    constructor() {
        this.query = util_1.default.promisify(database_1.connection.query).bind(database_1.connection);
    }
    Listar() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(EquipamentoScript_1.default.SelectBase());
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    Cadastrar(equipamento) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(EquipamentoScript_1.default.CadastrarEquipamento(equipamento));
                if (retorno) {
                    return equipamento;
                }
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    SelecionarEquipamentoPorId(equipamentoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(EquipamentoScript_1.default.SelecionarEquipamentoPorId(equipamentoId));
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    Atualizar(equipamento) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(EquipamentoScript_1.default.AtualizarEquipamento(equipamento));
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    Deletar(equipamentoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(EquipamentoScript_1.default.DeletarEquipamento(equipamentoId));
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
}
exports.default = new EquipamentoRepository();
