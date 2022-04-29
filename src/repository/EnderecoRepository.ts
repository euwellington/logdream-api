import script from './scripts/EnderecoScript';
import util from 'util';
import { connection } from '../database';
import { Endereco } from '../interface/EnderecoInterface';

class EnderecoRepository
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
            return retorno as Endereco[];
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async ListarEnderecosPorEquipamentoId(equipamentoId: string)
    {
        try {
            let retorno = await this.query(script.SelecionarEnderecoPorEquipamentoId(equipamentoId));
            return retorno[0] as Endereco;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Cadastrar(endereco: Endereco)
    {
        try {
            let retorno = await this.query(script.CadastrarEndereco(endereco));
            if(retorno) 
            {
                return endereco;
            }
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async SelecionarEnderecoPorId(enderecoId: string)
    {
        try {
            let retorno = await this.query(script.SelecionarEnderecoPorId(enderecoId));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Atualizar(endereco: Endereco)
    {
        try {
            let retorno = await this.query(script.AtualizarEndereco(endereco));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    public async Deletar(enderecoId: string)
    {
        try {
            let retorno = await this.query(script.DeletarEndereco(enderecoId));
            return retorno;
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

}

export default new EnderecoRepository();