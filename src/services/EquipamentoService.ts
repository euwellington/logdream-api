import EquipamentoRepository from '../repository/EquipamentoRepository';
import { Equipamento } from '../interface/EquipamentoInterface';
import GenerateGuid from '../tools/GenerateGuid';

class EquipamentoService
{

    public async Listar()
    {
        try {
            const retorno = await EquipamentoRepository.Listar();
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async SelecionarPorId(equipamentoId: string)
    {
        try {     
            const retorno = await EquipamentoRepository.SelecionarEquipamentoPorId(equipamentoId);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Cadastrar(equipamento: Equipamento)
    {
        try {     
            equipamento.id = GenerateGuid.guid();
            equipamento.dataCadastro = new Date();
            const retorno = await EquipamentoRepository.Cadastrar(equipamento);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Atualizar(equipamento: Equipamento)
    {
        try {      
            const retorno = await EquipamentoRepository.Atualizar(equipamento);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Deletar(equipamentoId: string)
    {
        try {     
            const retorno = await EquipamentoRepository.Deletar(equipamentoId);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

}

export default new EquipamentoService();