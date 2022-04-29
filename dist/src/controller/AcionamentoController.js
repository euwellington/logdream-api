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
const AcionamentoModel_1 = __importDefault(require("../models/AcionamentoModel"));
class AcionamentoController {
    Acionar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, flag, usuarioId } = req.params;
                const retorno = yield AcionamentoModel_1.default.acionar(id, usuarioId, flag);
                res.status(200)
                    .json({
                    message: 'Acionamento acatado com successo!',
                    estado: retorno,
                    flag: flag
                });
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Erro no acionamento!`,
                    response: e
                });
            }
        });
    }
    ListarAcionamentos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const retorno = yield AcionamentoModel_1.default.getAll();
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Nenhum acionamento encontrado!`,
                    response: e
                });
            }
        });
    }
    ListarAcionamentosPorEquipamentoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                const retorno = yield AcionamentoModel_1.default.getByEquipamentoFk(id);
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Nenhum acionamento encontrado!`,
                    response: e
                });
            }
        });
    }
    SelecionarAcionamentoPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                const retorno = yield AcionamentoModel_1.default.getByPk(id);
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Nenhum acionamento encontrado!`,
                    response: e
                });
            }
        });
    }
    Cadastrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const acionamento = req.body;
                const retorno = yield AcionamentoModel_1.default.create(acionamento);
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Erro ao cadastrar acionamento`,
                    response: e
                });
                console.log(e);
            }
        });
    }
    Atualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const acionamento = req.body;
                const retorno = yield AcionamentoModel_1.default.update(acionamento);
                res.status(200)
                    .json({
                    message: 'Acionamento atualizado com sucesso',
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
                const retorno = yield AcionamentoModel_1.default.delete(id);
                res.status(200)
                    .json({
                    message: 'Acionamento deletado com sucesso',
                    response: retorno
                });
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Erro ao deletar acionamento`,
                    response: e
                });
                console.log(e);
            }
        });
    }
}
exports.default = new AcionamentoController();
