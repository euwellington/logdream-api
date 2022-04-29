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
const NotaModel_1 = __importDefault(require("../models/NotaModel"));
class NotaController {
    ListarNotas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const retorno = yield NotaModel_1.default.getAll();
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Nenhuma nota encontrado!`,
                    response: e
                });
            }
        });
    }
    ListarNotasPorEquipamentoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                const retorno = yield NotaModel_1.default.getByEquipamentoFk(id);
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Nenhuma nota encontrado!`,
                    response: e
                });
            }
        });
    }
    SelecionarNotaPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                const retorno = yield NotaModel_1.default.getByPk(id);
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Nenhuma nota encontrado!`,
                    response: e
                });
            }
        });
    }
    Cadastrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nota = req.body;
                const retorno = yield NotaModel_1.default.create(nota);
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Erro ao cadastrar nota`,
                    response: e
                });
                console.log(e);
            }
        });
    }
    Atualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nota = req.body;
                const retorno = yield NotaModel_1.default.update(nota);
                res.status(200)
                    .json({
                    message: 'Nota atualizado com sucesso',
                    response: retorno
                });
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Erro ao atualizar acionamento`,
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
                const retorno = yield NotaModel_1.default.delete(id);
                res.status(200)
                    .json({
                    message: 'Nota deletado com sucesso',
                    response: retorno
                });
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Erro ao deletar nota`,
                    response: e
                });
                console.log(e);
            }
        });
    }
}
exports.default = new NotaController();
