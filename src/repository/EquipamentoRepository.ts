import script from './scripts/EquipamentoScript';
import util from 'util';
import { connection } from '../database';
import { Equipamento } from '../interface/EquipamentoInterface';

class EquipamentoRepository
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

    public async Cadastrar(equipamento: Equipamento)
    {
        try {
            let retorno = await this.query(script.CadastrarEquipamento(equipamento));
            if(retorno) 
            {
                return equipamento;
            }
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async SelecionarEquipamentoPorId(equipamentoId: string)
    {
        try {
            let retorno = await this.query(script.SelecionarEquipamentoPorId(equipamentoId));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Atualizar(equipamento: Equipamento)
    {
        try {
            let retorno = await this.query(script.AtualizarEquipamento(equipamento));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Deletar(equipamentoId: string)
    {
        try {
            let retorno = await this.query(script.DeletarEquipamento(equipamentoId));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

}

export default new EquipamentoRepository();