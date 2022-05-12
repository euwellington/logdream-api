import EnderecoRepository from '../repository/EnderecoRepository';
import { v4 } from 'uuid';
import { Endereco, EnderecoRequest } from '../interface/EnderecoInterface';
import { converterDataHora } from '../utils/masks';
import { EnderecoEntities } from './entites/Endereco';

var EnderecoModel = {} as EnderecoEntities;

EnderecoModel.getAll = async () =>
{
    try {
        const retorno = await EnderecoRepository.Listar();
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

EnderecoModel.getByPk = async (enderecoId: string)=>
{
    try {     
        const retorno = await EnderecoRepository.SelecionarEnderecoPorId(enderecoId);
        return retorno[0];
    } catch (err: any) {
        throw err.message;
    }
}

EnderecoModel.getByEquipamentoFk = async (equipamentoId: string) =>
{
    try {     
        const retorno = await EnderecoRepository.ListarEnderecosPorEquipamentoId(equipamentoId);
        return retorno[0];
    } catch (err: any) {
        throw err.message;
    }
}

EnderecoModel.create = async (endereco: Endereco) =>
{
    try {
        let newEndereco: EnderecoRequest = 
        {
            id: v4(),
            equipamentoId: endereco.equipamentoId,
            endereco: endereco.endereco,
            cidade: endereco.cidade,
            bairro: endereco.bairro,
            obs: endereco.obs
        }        
        const retorno = await EnderecoRepository.Cadastrar(newEndereco as Endereco);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

EnderecoModel.update = async (endereco: Endereco) =>
{
    try {     
        const retorno = await EnderecoRepository.Atualizar(endereco);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

EnderecoModel.delete = async (enderecoId: string) =>
{
    try {     
        const retorno = await EnderecoRepository.Deletar(enderecoId);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

export default EnderecoModel;