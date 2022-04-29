import { getAllAPIEvento, postAPIEvento, getByPkEvento, deleteAPIEvento, getByEquipamentoFkEvento } from "./API/eventosAPI";
import { getAllAPIAcionamento, getByFkEquipamentoAPIAcionamento, getByPkAPIAcionamento, postAPIAcionamento, updateAPIAcionamento, deleteAPIAcionamento, acionarAPIAcionamento } from "./API/acionamentoAPI";
import { getAllAPIUsuario, getByPkUsuario, postAPIUsuario, updateAPIUsuario, deleteAPIUsuario, postAPIAuth, getByEquipamentoFkUsuario } from './API/usuarioAPI';
import { PostSendMqtt } from './API/mqttAPI'
import { getAllAPIEquipamento, deleteAPIEquipamento, getByPkEquipamento, postAPIEquipamento, updateAPIEquipamento } from './API/equipamentoAPI'
import { deleteAPINota, getAllAPINota, getByEquipamentoFkNota, getByPkNota, postAPINota, updateAPINota } from './API/notaAPI'
import { deleteAPIEndereco, getAllAPIEndereco, getByEquipamentoFkEndereco, getByPkEndereco, postAPIEndereco, updateAPIEndereco } from './API/enderecoAPI'
const Endpoints =
{
    paths:{
        //EVENTO
        '/api/evento':
        {
            ...getAllAPIEvento,
            ...postAPIEvento,
        },
        '/api/evento/equipamento/{id}':
        {
            ...getByEquipamentoFkEvento
        },
        '/api/evento/{id}':
        {
            ...getByPkEvento,
            ...deleteAPIEvento,
        },
        // ACIONAMENTO
        '/api/acionamento/acionar/{id}/{usuarioId}/{flag}':
        {
            ...acionarAPIAcionamento,
        },
        '/api/acionamento/equipamentoId/{id}':
        {
            ...getByFkEquipamentoAPIAcionamento
        },
        '/api/acionamento':
        {
            ...getAllAPIAcionamento,
            ...postAPIAcionamento,
            ...updateAPIAcionamento
        },
        '/api/acionamento/{id}':
        {
            ...getByPkAPIAcionamento,
            ...deleteAPIAcionamento
        },
        // USUARIO
        '/api/usuario':
        {
            ...getAllAPIUsuario,
            ...postAPIUsuario,
            ...updateAPIUsuario
        },
        '/api/usuario/equipamento/{id}':
        {
            ...getByEquipamentoFkUsuario
        },
        '/api/usuario/{id}':
        {
            ...getByPkUsuario,
            ...deleteAPIUsuario
        },
        // AUTH
        '/api/auth':
        {
            ...postAPIAuth
        },
        // MQTT
        '/api/mqtt/enviar':
        {
            ...PostSendMqtt
        },
        // EQUIPAMENTO
        '/api/equipamento':
        {
            ...getAllAPIEquipamento,
            ...postAPIEquipamento,
            ...updateAPIEquipamento
        },
        '/api/equipamento/{id}':
        {
            ...getByPkEquipamento,
            ...deleteAPIEquipamento,
        },
        // NOTA
        '/api/nota':
        {
            ...getAllAPINota,
            ...postAPINota,
            ...updateAPINota
        },
        '/api/nota/{id}':
        {
            ...getByPkNota,
            ...deleteAPINota,
        },
        '/api/nota/equipamento/{id}':
        {
            ...getByEquipamentoFkNota,
        },
        // ENDERECO
        '/api/endereco':
        {
            ...getAllAPIEndereco,
            ...postAPIEndereco,
            ...updateAPIEndereco
        },
        '/api/endereco/{id}':
        {
            ...getByPkEndereco,
            ...deleteAPIEndereco,
        },
        '/api/endereco/equipamento/{id}':
        {
            ...getByEquipamentoFkEndereco,
        },
    }
}

export { Endpoints };