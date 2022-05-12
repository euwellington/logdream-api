import { AcionamentoEntities } from './entites/Acionamento';
import AcionamentoRepository from '../repository/AcionamentoRepository';
import { v4 } from 'uuid';
import { Acionamento, AcionamentoRequest } from '../interface/AcionamentoInterface';
import { converterDataHora } from '../utils/masks';
import { enviaAcionamento } from '../services_/mqtt/pub';
import EventoService from './EventoService';

var AcionamentoModel = {} as AcionamentoEntities;

AcionamentoModel.acionar = async (acionamentoId: string, usuarioId: string, flag: string) =>
{
    try {
        const retorno: Acionamento[] = await AcionamentoRepository.Listar();
        let acionamentoState = retorno.find((acio) => acio.id === acionamentoId);
        if(acionamentoState?.tipo === 0)
        {
            let buffer = acionamentoState.estado ? false : true;
            enviaAcionamento(acionamentoState!.topic, String(buffer));
            EventoService.create({
                id: '',
                acionamentoId: acionamentoState.id,
                equipamentoId: acionamentoState.equipamentoId,
                usuarioId: usuarioId,
                dataHora: converterDataHora(new Date())
            })
            if(acionamentoState?.estado)
            {
                await AcionamentoRepository.Acionar({
                    ...acionamentoState!,
                    estado: false,
                });
                return false
            }
            else
            {
                await AcionamentoRepository.Acionar({
                    ...acionamentoState!,
                    estado: true
                });
                return true
            }
        }
        else if(acionamentoState?.tipo === 1)
        {
            EventoService.create({
                id: '',
                acionamentoId: acionamentoState.id,
                equipamentoId: acionamentoState.equipamentoId,
                usuarioId: usuarioId,
                dataHora: converterDataHora(new Date()),
            })
            let retorno = await AcionamentoRepository.Acionar({
                ...acionamentoState!,
                estado: false,
                flag: flag
            });
            if(retorno) enviaAcionamento(acionamentoState!.topic, flag);
            return false
        }
    } catch (err: any) {
        throw err.message;
    }
}

AcionamentoModel.getAll = async () =>
{
    try {
        const retorno = await AcionamentoRepository.Listar();
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

AcionamentoModel.getByPk = async (acionamentoId: string) =>
{
    try {     
        const retorno = await AcionamentoRepository.SelecionarAcionamentoPorId(acionamentoId);
        return retorno[0];
    } catch (err: any) {
        throw err.message;
    }
}

AcionamentoModel.getByEquipamentoFk = async (equipamentoId: string) =>
{
    try {     
        const retorno: Acionamento = await AcionamentoRepository.ListarAcionamentosPorEquipamentoId(equipamentoId);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

AcionamentoModel.create = async (acionamento: Acionamento) =>
{
    try {
        let newAcionamento: Acionamento = 
        {
            id: v4(),
            equipamentoId: acionamento.equipamentoId,
            nome: acionamento.nome,
            topic: `${acionamento.equipamentoId}/${acionamento.topic}`,
            estado: false,
            tipo: acionamento.tipo,
            flag: acionamento.flag,
            dataCadastro: converterDataHora(new Date())
        }        
        const retorno = await AcionamentoRepository.Cadastrar(newAcionamento);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

AcionamentoModel.update = async (acionamento: Acionamento) =>
{
    try {     
        const retorno = await AcionamentoRepository.Atualizar(acionamento);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

AcionamentoModel.delete = async (acionamentoId: string) =>
{
    try {     
        const retorno = await AcionamentoRepository.Deletar(acionamentoId);
        return retorno;
    } catch (err: any) {
        throw err.message;
    }
}

export default AcionamentoModel;

