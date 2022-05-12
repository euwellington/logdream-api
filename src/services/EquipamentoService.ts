import { EquipamentoEntities } from './entites/Equipamento';
import EquipamentoRepository from '../repository/EquipamentoRepository';
import { compare, hash } from 'bcryptjs';
import { v4 } from 'uuid';
import { Equipamento } from '../interface/EquipamentoInterface';
import { converterDataHora } from '../utils/masks';

var EquipamentoModel = {} as EquipamentoEntities;

EquipamentoModel.getAll = async () =>
{
    try {
        const retorno = await EquipamentoRepository.Listar();
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

EquipamentoModel.getByPk = async (EquipamentoId: string) =>
{
    try {     
        const retorno = await EquipamentoRepository.SelecionarEquipamentoPorId(EquipamentoId);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

EquipamentoModel.create = async (Equipamento: Equipamento) =>
{
    try {     
        let newEquipamento: Equipamento = 
        {
            id: v4(),
            nome: Equipamento.nome,
            ip: Equipamento.ip,
            chip: Equipamento.chip,
            versao: Equipamento.versao,
            dataCadastro: converterDataHora(new Date())
        } 
        const retorno = await EquipamentoRepository.Cadastrar(newEquipamento);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

EquipamentoModel.update = async (equipamento: Equipamento) =>
{
    try {      
        const retorno = await EquipamentoRepository.Atualizar(equipamento);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

EquipamentoModel.delete = async (EquipamentoId: string) =>
{
    try {     
        const retorno = await EquipamentoRepository.Deletar(EquipamentoId);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

export default EquipamentoModel;