import script from './scripts/AcionamentoScript';
import util from 'util';
import { connection } from '../database';
import { Acionamento } from '../interface/AcionamentoInterface';

class AcionamentoRepository
{

    query: any;

    constructor()
    {
        this.query = util.promisify(connection.query).bind(connection);
    }

    public async Acionar(acionamento: Acionamento)
    {
        try {
            let retorno = await this.query(script.Acionar(acionamento));
            return retorno
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Listar()
    {
        try {
            let retorno = await this.query(script.SelectBase());
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async ListarAcionamentosPorEquipamentoId(equipamentoId: string)
    {
        try {
            let retorno = await this.query(script.AcionamentoPorEquipamentoId(equipamentoId));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Cadastrar(acionamento: Acionamento)
    {
        try {
            let retorno = await this.query(script.CadastrarAconamento(acionamento));
            if(retorno) 
            {
                return acionamento;
            }
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async SelecionarAcionamentoPorId(acionamentoId: string)
    {
        try {
            let retorno = await this.query(script.SelecionarAcionamentoPorId(acionamentoId));
            return retorno as Acionamento[];
        } catch (err: any) {
            throw new Error(err.message)
        }
    }
    

    public async Atualizar(acionamento: Acionamento)
    {
        try {
            let retorno = await this.query(script.AtualizarAcionamento(acionamento));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Deletar(acionamentoId: string)
    {
        try {
            let retorno = await this.query(script.DeletarAcionamento(acionamentoId));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

}

export default new AcionamentoRepository();