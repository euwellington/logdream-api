import { EventoEntities } from './entites/Evento';
import EventoRepository from '../repository/EventoRepository';
import { compare, hash } from 'bcryptjs';
import { v4 } from 'uuid';
import { Evento } from '../interface/EventoInterface';
import { converterDataHora } from '../utils/masks';

var EventoModel = {} as EventoEntities;

EventoModel.getAll = async () =>
{
    try {
        const retorno = await EventoRepository.Listar();
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

EventoModel.getByPk = async (eventoId: string) =>
{
    try {     
        const retorno = await EventoRepository.SelecionarEventoPorId(eventoId);
        return retorno[0];
    } catch (err: any) {
        throw err.message;
    }
}

EventoModel.getByEquipamentoFk = async (equipamentoId: string) =>
{
    try {     
        const retorno = await EventoRepository.ListarEventoPorEquipamentoId(equipamentoId);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

EventoModel.create = async (evento: Evento) =>
{
    try {     
        let newEvento: Evento = 
        {
            id: v4(),
            usuarioId: evento.usuarioId,
            equipamentoId: evento.equipamentoId,
            acionamentoId: evento.acionamentoId,
            dataHora: converterDataHora(new Date())
        } 
        const retorno = await EventoRepository.Salvar(newEvento);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

EventoModel.delete = async (eventoId: string) =>
{
    try {     
        const retorno = await EventoRepository.Deletar(eventoId);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

export default EventoModel;