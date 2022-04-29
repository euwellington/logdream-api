import { NotaEntities } from './entites/Nota';
import EquipamentoRepository from '../repository/NotaRepository';
import { v4 } from 'uuid';
import { converterDataHora } from '../utils/masks';
import { Nota } from '../interface/NotaInterface';

var NotaModel = {} as NotaEntities;

NotaModel.getAll = async () =>
{
    try {
        const retorno = await EquipamentoRepository.Listar();
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

NotaModel.getByPk = async (notaId: string) =>
{
    try {     
        const retorno = await EquipamentoRepository.SelecionarNotaPorId(notaId);
        return retorno[0];
    } catch (err: any) {
        throw err.message;
    }
}

NotaModel.getByEquipamentoFk = async (equipamentoId: string) =>
{
    try {     
        const retorno = await EquipamentoRepository.ListarNotaPorEquipamentoId(equipamentoId);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

NotaModel.create = async (nota: Nota) =>
{
    try {     
        let newNota: Nota = 
        {
            id: v4(),
            equipamentoId: nota.equipamentoId,
            usuarioId: nota.usuarioId,
            descricao: nota.descricao,
            tipo: nota.tipo,
            dataHora: converterDataHora(new Date())
        } 
        const retorno = await EquipamentoRepository.Cadastrar(newNota);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

NotaModel.update = async (nota: Nota) =>
{
    try {      
        const retorno = await EquipamentoRepository.Atualizar(nota);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

NotaModel.delete = async (notaId: string) =>
{
    try {     
        const retorno = await EquipamentoRepository.Deletar(notaId);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

export default NotaModel;