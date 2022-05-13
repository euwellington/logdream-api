import { Request, Response } from 'express'; 
import AcionamentoService from '../services/AcionamentoService';
import { Acionamento } from '../interface/AcionamentoInterface';

class AcionamentoController
{
    public async Acionar(req: Request, res: Response)
    {
        try {
            const { id, flag, usuarioId } = req.params;    
            const retorno = await AcionamentoService.Acionar(id, usuarioId, flag);
            res.status(200)
            .json({
                message: 'Acionamento acatado com successo!',
                estado: retorno,
                flag: flag
            });
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro no acionamento!`,
                response: e
            });
        }
    }

    public async ListarAcionamentos(req: Request, res: Response)
    {
        try { 
            const retorno = await AcionamentoService.Listar();
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum acionamento encontrado!`,
                response: e
            });
        }
    }

    public async ListarAcionamentosPorEquipamentoId(req: Request, res: Response)
    {
        try { 
            let id = req.params.id;
            const retorno = await AcionamentoService.ListarPorEquipamentoId(id);
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum acionamento encontrado!`,
                response: e
            });
        }
    }

    public async SelecionarAcionamentoPorId(req: Request, res: Response)
    {
        try { 
            let id = req.params.id;
            const retorno = await AcionamentoService.SelecionarPorId(id);
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum acionamento encontrado!`,
                response: e
            });
        }
    }

    public async Cadastrar(req: Request, res: Response)
    {
        try { 
            const acionamento = <Acionamento>req.body;
            const retorno = await AcionamentoService.Cadastrar(acionamento);
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao cadastrar acionamento`,
                response: e
            });
            console.log(e)
        }
    }

    public async Atualizar(req: Request, res: Response)
    {
        try { 
            const acionamento = <Acionamento>req.body;
            const retorno = await AcionamentoService.Atualizar(acionamento);
            res.status(200)
            .json({
                message: 'Acionamento atualizado com sucesso',
                response: retorno
            });
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao atualizar acionamento`,
                response: e
            });
            console.log(e)
        }
    }

    public async Deletar(req: Request, res: Response)
    {
        try { 
            const id = req.params.id;
            const retorno = await AcionamentoService.Deletar(id);
            res.status(200)
            .json({
                message: 'Acionamento deletado com sucesso',
                response: retorno
            });
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao deletar acionamento`,
                response: e
            });
            console.log(e)
        }
    }

}

export default new AcionamentoController();