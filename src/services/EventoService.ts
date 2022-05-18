import EventoRepository from '../repository/EventoRepository';
import { Evento } from '../interface/EventoInterface';
import GenerateGuid from '../tools/GenerateGuid';
import DateTimeTool from '../tools/DateTimeTool';

class EventoService
{

    public async Listar()
    {
        try {
            const retorno = await EventoRepository.Listar();
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async ListarPorEquipamentoId(equipamentoId: string)
    {
        try {     
            const retorno = await EventoRepository.ListarEventoPorEquipamentoId(equipamentoId);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async SelecionarPorId(eventoId: string)
    {
        try {     
            const retorno = await EventoRepository.SelecionarEventoPorId(eventoId);
            return retorno[0];
        } catch (err: any) {
            throw err.message;
        }
    }
    
    public async Cadastrar(evento: Evento)
    {
        try {     
            evento.id = GenerateGuid.guid();
            evento.dataHora = DateTimeTool.currentDateTime()
            const retorno = await EventoRepository.Salvar(evento);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Deletar(eventoId: string)
    {
        try {     
            const retorno = await EventoRepository.Deletar(eventoId);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

}

export default new EventoService();