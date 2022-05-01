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
const UsuarioRepository_1 = __importDefault(require("../repository/UsuarioRepository"));
const bcryptjs_1 = require("bcryptjs");
const uuid_1 = require("uuid");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../env");
const masks_1 = require("../utils/masks");
var UsuarioModel = {};
UsuarioModel.login = (email, senha) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield UsuarioRepository_1.default.Login();
        let user = retorno.find((usr) => usr.email === email);
        if (user && (yield (0, bcryptjs_1.compare)(senha, user.senha))) {
            const token = jsonwebtoken_1.default.sign({ user: user }, env_1.SECRET.token);
            return token;
        }
        throw 'Usuário náo encontrado!';
    }
    catch (err) {
        throw err.message;
    }
});
UsuarioModel.getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield UsuarioRepository_1.default.Listar();
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
UsuarioModel.getByPk = (usuarioId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield UsuarioRepository_1.default.SelecionarUsuarioPorId(usuarioId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
UsuarioModel.getByEquipamentoFk = (equipamentoId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield UsuarioRepository_1.default.ListarUsuariosPorEquipamentoId(equipamentoId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
UsuarioModel.create = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let generetePassword = yield (0, bcryptjs_1.hash)(usuario.senha, 5);
        let newUser = {
            id: (0, uuid_1.v4)(),
            equipamentoId: usuario.equipamentoId,
            nome: usuario.nome,
            cpf: usuario.cpf.replace(/[^0-9]/g, ''),
            email: usuario.email,
            nascimento: usuario.nascimento,
            senha: generetePassword,
            dataCadastro: (0, masks_1.converterDataHora)(new Date())
        };
        const retorno = yield UsuarioRepository_1.default.Cadastrar(newUser);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
UsuarioModel.update = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let genereteNewPassword = yield (0, bcryptjs_1.hash)(usuario.senha, 5);
        let updateUser = {
            id: usuario.id,
            nome: usuario.nome,
            cpf: usuario.cpf.replace(/[^0-9]/g, ''),
            email: usuario.email,
            nascimento: usuario.nascimento,
            senha: genereteNewPassword
        };
        const retorno = yield UsuarioRepository_1.default.Atualizar(updateUser);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
UsuarioModel.delete = (usuarioId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retorno = yield UsuarioRepository_1.default.Deletar(usuarioId);
        return retorno;
    }
    catch (err) {
        throw err.message;
    }
});
exports.default = UsuarioModel;
