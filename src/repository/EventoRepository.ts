import script from './scripts/EventoScript';
import util from 'util';
import { connection } from '../database';
import { Evento } from '../interface/EventoInterface';

class EventoRepository
{

    query: any;

    constructor()
    {
        this.query = util.promisify(connection.query).bind(connection);
    }

    public async Login()
    {
        try {
            let retorno = await this.query(script.SelectBase());
            return retorno as Evento[];
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Listar()
    {
        try {
            let retorno = await this.query(script.SelectBase());
            return retorno as Evento[];
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async ListarEventoPorEquipamentoId(equipamentoId: string)
    {
        try {
            let retorno = await this.query(script.ListarEventoPorEquipamentoId(equipamentoId));
            return retorno as Evento[];
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Salvar(evento: Evento)
    {
        try {
            let retorno = await this.query(script.Salvar(evento));
            if(retorno) 
            {
                return evento;
            }
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async SelecionarEventoPorId(eventoId: string)
    {
        try {
            let retorno = await this.query(script.SelecionarEventoPorId(eventoId));
            return retorno as Evento[];
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Deletar(eventoId: string)
    {
        try {
            let retorno = await this.query(script.DeletarEvento(eventoId));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

}

export default new EventoRepository();