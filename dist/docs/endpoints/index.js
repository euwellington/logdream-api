"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoints = void 0;
const eventosAPI_1 = require("./API/eventosAPI");
const acionamentoAPI_1 = require("./API/acionamentoAPI");
const usuarioAPI_1 = require("./API/usuarioAPI");
const mqttAPI_1 = require("./API/mqttAPI");
const equipamentoAPI_1 = require("./API/equipamentoAPI");
const notaAPI_1 = require("./API/notaAPI");
const enderecoAPI_1 = require("./API/enderecoAPI");
const Endpoints = {
    paths: {
        //EVENTO
        '/api/evento': Object.assign(Object.assign({}, eventosAPI_1.getAllAPIEvento), eventosAPI_1.postAPIEvento),
        '/api/evento/equipamento/{id}': Object.assign({}, eventosAPI_1.getByEquipamentoFkEvento),
        '/api/evento/{id}': Object.assign(Object.assign({}, eventosAPI_1.getByPkEvento), eventosAPI_1.deleteAPIEvento),
        // ACIONAMENTO
        '/api/acionamento/acionar/{id}/{usuarioId}/{flag}': Object.assign({}, acionamentoAPI_1.acionarAPIAcionamento),
        '/api/acionamento/equipamentoId/{id}': Object.assign({}, acionamentoAPI_1.getByFkEquipamentoAPIAcionamento),
        '/api/acionamento': Object.assign(Object.assign(Object.assign({}, acionamentoAPI_1.getAllAPIAcionamento), acionamentoAPI_1.postAPIAcionamento), acionamentoAPI_1.updateAPIAcionamento),
        '/api/acionamento/{id}': Object.assign(Object.assign({}, acionamentoAPI_1.getByPkAPIAcionamento), acionamentoAPI_1.deleteAPIAcionamento),
        // USUARIO
        '/api/usuario': Object.assign(Object.assign(Object.assign({}, usuarioAPI_1.getAllAPIUsuario), usuarioAPI_1.postAPIUsuario), usuarioAPI_1.updateAPIUsuario),
        '/api/usuario/equipamento/{id}': Object.assign({}, usuarioAPI_1.getByEquipamentoFkUsuario),
        '/api/usuario/{id}': Object.assign(Object.assign({}, usuarioAPI_1.getByPkUsuario), usuarioAPI_1.deleteAPIUsuario),
        // AUTH
        '/api/auth': Object.assign({}, usuarioAPI_1.postAPIAuth),
        // MQTT
        '/api/mqtt/enviar': Object.assign({}, mqttAPI_1.PostSendMqtt),
        // EQUIPAMENTO
        '/api/equipamento': Object.assign(Object.assign(Object.assign({}, equipamentoAPI_1.getAllAPIEquipamento), equipamentoAPI_1.postAPIEquipamento), equipamentoAPI_1.updateAPIEquipamento),
        '/api/equipamento/{id}': Object.assign(Object.assign({}, equipamentoAPI_1.getByPkEquipamento), equipamentoAPI_1.deleteAPIEquipamento),
        // NOTA
        '/api/nota': Object.assign(Object.assign(Object.assign({}, notaAPI_1.getAllAPINota), notaAPI_1.postAPINota), notaAPI_1.updateAPINota),
        '/api/nota/{id}': Object.assign(Object.assign({}, notaAPI_1.getByPkNota), notaAPI_1.deleteAPINota),
        '/api/nota/equipamento/{id}': Object.assign({}, notaAPI_1.getByEquipamentoFkNota),
        // ENDERECO
        '/api/endereco': Object.assign(Object.assign(Object.assign({}, enderecoAPI_1.getAllAPIEndereco), enderecoAPI_1.postAPIEndereco), enderecoAPI_1.updateAPIEndereco),
        '/api/endereco/{id}': Object.assign(Object.assign({}, enderecoAPI_1.getByPkEndereco), enderecoAPI_1.deleteAPIEndereco),
        '/api/endereco/equipamento/{id}': Object.assign({}, enderecoAPI_1.getByEquipamentoFkEndereco),
    }
};
exports.Endpoints = Endpoints;
