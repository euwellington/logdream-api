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
const UsuarioModel_1 = __importDefault(require("../models/UsuarioModel"));
class UsuarioController {
    Auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, senha } = req.body;
                const retorno = yield UsuarioModel_1.default.login(email, senha);
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Usuário não encontrado!`,
                    response: e
                });
                console.log(e);
            }
        });
    }
    ListarUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const retorno = yield UsuarioModel_1.default.getAll();
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Nenhum usuário encontrado!`,
                    response: e
                });
            }
        });
    }
    ListarUsuariosPorEquipamentoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                const retorno = yield UsuarioModel_1.default.getByEquipamentoFk(id);
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Nenhum usuário encontrado!`,
                    response: e
                });
            }
        });
    }
    SelecionarUsuarioPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                const retorno = yield UsuarioModel_1.default.getByPk(id);
                res.status(200)
                    .json(retorno[0]);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Nenhum usuário encontrado!`,
                    response: e
                });
            }
        });
    }
    Cadastrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = req.body;
                const retorno = yield UsuarioModel_1.default.create(usuario);
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Erro ao cadastrar usuário`,
                    response: e
                });
                console.log(e);
            }
        });
    }
    Atualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = req.body;
                const retorno = yield UsuarioModel_1.default.update(usuario);
                res.status(200)
                    .json({
                    message: 'Usuário atualizado com sucesso',
                    response: retorno
                });
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Erro ao atualizar usuário`,
                    response: e
                });
                console.log(e);
            }
        });
    }
    Deletar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const retorno = yield UsuarioModel_1.default.delete(id);
                res.status(200)
                    .json({
                    message: 'Usuário deletado com sucesso',
                    response: retorno
                });
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Erro ao deletar usuário`,
                    response: e
                });
                console.log(e);
            }
        });
    }
}
exports.default = new UsuarioController();
