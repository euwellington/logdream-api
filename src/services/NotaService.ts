import EquipamentoRepository from '../repository/NotaRepository';
import { Nota } from '../interface/NotaInterface';
import GenerateGuid from '../tools/GenerateGuid';
import DateTimeTool from '../tools/DateTimeTool';

class NotaService
{

    public async Listar()
    {
        try {     
            const retorno = await EquipamentoRepository.Listar();
            return retorno[0];
        } catch (err: any) {
            throw err.message;
        }
    }

    public async SelecionarPorId(notaId: string)
    {
        try {     
            const retorno = await EquipamentoRepository.SelecionarNotaPorId(notaId);
            return retorno[0];
        } catch (err: any) {
            throw err.message;
        }
    }

    public async ListarPorEquipamentoId(equipamentoId: string)
    {
        try {     
            const retorno = await EquipamentoRepository.ListarNotaPorEquipamentoId(equipamentoId);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Cadastrar(nota: Nota)
    {
        try {     
            nota.id = GenerateGuid.guid();
            nota.dataHora = DateTimeTool.currentDateTime()
            const retorno = await EquipamentoRepository.Cadastrar(nota);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Atualizar(nota: Nota)
    {
        try {      
            const retorno = await EquipamentoRepository.Atualizar(nota);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Deletar(notaId: string)
    {
        try {     
            const retorno = await EquipamentoRepository.Deletar(notaId);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

}

export default new NotaService();