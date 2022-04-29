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
const EnderecoScript_1 = __importDefault(require("./scripts/EnderecoScript"));
const util_1 = __importDefault(require("util"));
const database_1 = require("../database");
class EnderecoRepository {
    constructor() {
        this.query = util_1.default.promisify(database_1.connection.query).bind(database_1.connection);
    }
    Listar() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(EnderecoScript_1.default.SelectBase());
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    ListarEnderecosPorEquipamentoId(equipamentoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(EnderecoScript_1.default.SelecionarEnderecoPorEquipamentoId(equipamentoId));
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    Cadastrar(endereco) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(EnderecoScript_1.default.CadastrarEndereco(endereco));
                if (retorno) {
                    return endereco;
                }
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    SelecionarEnderecoPorId(enderecoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(EnderecoScript_1.default.SelecionarEnderecoPorId(enderecoId));
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    Atualizar(endereco) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(EnderecoScript_1.default.AtualizarEndereco(endereco));
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    Deletar(enderecoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let retorno = yield this.query(EnderecoScript_1.default.DeletarEndereco(enderecoId));
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
}
exports.default = new EnderecoRepository();
