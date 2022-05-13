import AcionamentoRepository from '../repository/AcionamentoRepository';
import { Acionamento } from '../interface/AcionamentoInterface';
import { enviaAcionamento } from './mqtt/pub';
import EventoService from './EventoService';
import GenerateGuid from '../tools/GenerateGuid';
class AcionamentoService
{

    public async Acionar(acionamentoId: string, usuarioId: string, flag: string)
    {
        const retorno: Acionamento[] = await AcionamentoRepository.Listar();
        let acionamentoState = retorno.find((acio) => acio.id === acionamentoId);
        if(acionamentoState?.tipo === 0)
        {
            let buffer = acionamentoState.estado ? false : true;
            enviaAcionamento(acionamentoState!.topic, String(buffer));
            EventoService.Cadastrar({
                id: '',
                acionamentoId: acionamentoState.id,
                equipamentoId: acionamentoState.equipamentoId,
                usuarioId: usuarioId,
                dataHora: new Date()
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
            EventoService.Cadastrar({
                id: '',
                acionamentoId: acionamentoState.id,
                equipamentoId: acionamentoState.equipamentoId,
                usuarioId: usuarioId,
                dataHora: new Date()
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


    public async Listar()
    {
        try {
            const retorno = await AcionamentoRepository.Listar();
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async SelecionarPorId(acionamentoId: string)
    {
        try {     
            const retorno = await AcionamentoRepository.SelecionarAcionamentoPorId(acionamentoId);
            return retorno[0];
        } catch (err: any) {
            throw err.message;
        }
    }

    public async ListarPorEquipamentoId(equipamentoId: string)
    {
        try {     
            const retorno: Acionamento = await AcionamentoRepository.ListarAcionamentosPorEquipamentoId(equipamentoId);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Cadastrar(acionamento: Acionamento)
    {
        try {
            acionamento.id = GenerateGuid.guid();
            acionamento.topic = `${acionamento.equipamentoId}/${acionamento.topic}`;
            acionamento.dataCadastro = new Date();
            const retorno = await AcionamentoRepository.Cadastrar(acionamento);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Atualizar(acionamento: Acionamento)
    {
        try {     
            const retorno = await AcionamentoRepository.Atualizar(acionamento);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }

    public async Deletar(acionamentoId: string)
    {
        try {     
            const retorno = await AcionamentoRepository.Deletar(acionamentoId);
            return retorno;
        } catch (err: any) {
            throw err.message;
        }
    }
}

export default new AcionamentoService();