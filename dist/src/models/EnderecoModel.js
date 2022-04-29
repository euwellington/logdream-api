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
const EnderecoRepository_1 = __importDefault(require("../repository/EnderecoRepository"));
const uuid_1 = require("uuid");
var EnderecoModel = {};
EnderecoModel.getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield EnderecoRepository_1.default.Listar();
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
EnderecoModel.getByPk = (enderecoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield EnderecoRepository_1.default.SelecionarEnderecoPorId(enderecoId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
EnderecoModel.getByEquipamentoFk = (equipamentoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield EnderecoRepository_1.default.ListarEnderecosPorEquipamentoId(equipamentoId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
EnderecoModel.create = (endereco) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newEndereco = {
            id: (0, uuid_1.v4)(),
            equipamentoId: endereco.equipamentoId,
            endereco: endereco.endereco,
            cidade: endereco.cidade,
            bairro: endereco.bairro,
            obs: endereco.obs
        };
        const retorno = yield EnderecoRepository_1.default.Cadastrar(newEndereco);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
EnderecoModel.update = (endereco) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield EnderecoRepository_1.default.Atualizar(endereco);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
EnderecoModel.delete = (enderecoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield EnderecoRepository_1.default.Deletar(enderecoId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
exports.default = EnderecoModel;
