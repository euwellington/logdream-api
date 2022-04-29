import script from './scripts/NotaScript';
import util from 'util';
import { connection } from '../database';
import { Nota } from '../interface/NotaInterface';

class NotaRepository
{

    query: any;

    constructor()
    {
        this.query = util.promisify(connection.query).bind(connection);
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

    public async Cadastrar(nota: Nota)
    {
        try {
            let retorno = await this.query(script.CadastrarNota(nota));
            if(retorno) 
            {
                return nota;
            }
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async SelecionarNotaPorId(notaId: string)
    {
        try {
            let retorno = await this.query(script.SelecionarNotaPorId(notaId));
            return retorno as Nota[];
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async ListarNotaPorEquipamentoId(equipamentoId: string)
    {
        try {
            let retorno = await this.query(script.ListarNotaPorEquipamentoId(equipamentoId));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Atualizar(nota: Nota)
    {
        try {
            let retorno = await this.query(script.AtualizarNota(nota));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Deletar(notaId: string)
    {
        try {
            let retorno = await this.query(script.DeletarEquipamento(notaId));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

}

export default new NotaRepository();