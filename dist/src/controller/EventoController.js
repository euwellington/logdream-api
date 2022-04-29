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
const EventoModel_1 = __importDefault(require("../models/EventoModel"));
class EventoController {
    ListarEventos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const retorno = yield EventoModel_1.default.getAll();
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Nenhum evento encontrado!`,
                    response: e
                });
            }
        });
    }
    ListarEventosPorEquipamentoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                const retorno = yield EventoModel_1.default.getByEquipamentoFk(id);
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Nenhum evento encontrado!`,
                    response: e
                });
            }
        });
    }
    SelecionarEventoPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                const retorno = yield EventoModel_1.default.getByPk(id);
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Nenhum evento encontrado!`,
                    response: e
                });
            }
        });
    }
    Cadastrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const evento = req.body;
                const retorno = yield EventoModel_1.default.create(evento);
                res.status(200)
                    .json(retorno);
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Erro ao salvar evento`,
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
                const retorno = yield EventoModel_1.default.delete(id);
                res.status(200)
                    .json({
                    message: 'Evento deletado com sucesso',
                    response: retorno
                });
            }
            catch (e) {
                res.status(400)
                    .json({
                    message: `Erro ao deletar evento`,
                    response: e
                });
                console.log(e);
            }
        });
    }
}
exports.default = new EventoController();
