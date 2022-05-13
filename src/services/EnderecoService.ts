import EnderecoRepository from '../repository/EnderecoRepository';
import { Endereco } from '../interface/EnderecoInterface';
import GenerateGuid from '../tools/GenerateGuid';

class EnderecoService
{

    public async Listar()
    {
        try {
            const retorno = await EnderecoRepository.Listar();
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async SelecionarPorId(enderecoId: string)
    {
        try {     
            const retorno = await EnderecoRepository.SelecionarEnderecoPorId(enderecoId);
            return retorno[0];
        } catch (err: any) {
            throw err.message;
        }
    }

    public async ListarPorEquipamentoId(equipamentoId: string) {
        try {     
            const retorno = await EnderecoRepository.ListarEnderecosPorEquipamentoId(equipamentoId);
            return retorno[0];
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Cadastrar(endereco: Endereco)
    {
        try {   
            endereco.id = GenerateGuid.guid();     
            const retorno = await EnderecoRepository.Cadastrar(endereco);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Atualizar(endereco: Endereco)
    {
        try {     
            const retorno = await EnderecoRepository.Atualizar(endereco);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }
    
    public async Deletar(enderecoId: string)
    {
        try {     
            const retorno = await EnderecoRepository.Deletar(enderecoId);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

}

export default new EnderecoService();