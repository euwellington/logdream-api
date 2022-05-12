import { Request, Response } from 'express'; 
// import AcionamentoModel from '../models/AcionamentoModel';
import { Acionamento } from '../interface/AcionamentoInterface';

class AcionamentoController
{
    public async Acionar(req: Request, res: Response)
    {
        // try {
        //     const { id, flag, usuarioId } = req.params;    
        //     const retorno = await AcionamentoModel.acionar(id, usuarioId, flag);
        //     res.status(200)
        //     .json({
        //         message: 'Acionamento acatado com successo!',
        //         estado: retorno,
        //         flag: flag
        //     });
        // } catch (e: any) {
        //     res.status(400)
        //     .json({
        //         message: `Erro no acionamento!`,
        //         response: e
        //     });
        // }
        res.send('bay')
    }

    public async ListarAcionamentos(req: Request, res: Response)
    {
        // try { 
        //     const retorno = await AcionamentoModel.getAll();
        //     res.status(200)
        //     .json(retorno);
        // } catch (e: any) {
        //     res.status(400)
        //     .json({
        //         message: `Nenhum acionamento encontrado!`,
        //         response: e
        //     });
        // }
        res.send('bay')

    }

    public async ListarAcionamentosPorEquipamentoId(req: Request, res: Response)
    {
        // try { 
        //     let id = req.params.id;
        //     const retorno = await AcionamentoModel.getByEquipamentoFk(id);
        //     res.status(200)
        //     .json(retorno);
        // } catch (e: any) {
        //     res.status(400)
        //     .json({
        //         message: `Nenhum acionamento encontrado!`,
        //         response: e
        //     });
        // }
        res.send('bay')
    }

    public async SelecionarAcionamentoPorId(req: Request, res: Response)
    {
        // try { 
        //     let id = req.params.id;
        //     const retorno = await AcionamentoModel.getByPk(id);
        //     res.status(200)
        //     .json(retorno);
        // } catch (e: any) {
        //     res.status(400)
        //     .json({
        //         message: `Nenhum acionamento encontrado!`,
        //         response: e
        //     });
        // }
        res.send('bay')
    }

    public async Cadastrar(req: Request, res: Response)
    {
        // try { 
        //     const acionamento = <Acionamento>req.body;
        //     const retorno = await AcionamentoModel.create(acionamento);
        //     res.status(200)
        //     .json(retorno);
        // } catch (e: any) {
        //     res.status(400)
        //     .json({
        //         message: `Erro ao cadastrar acionamento`,
        //         response: e
        //     });
        //     console.log(e)
        // }
        res.send('bay')
    }

    public async Atualizar(req: Request, res: Response)
    {
        // try { 
        //     const acionamento = <Acionamento>req.body;
        //     const retorno = await AcionamentoModel.update(acionamento);
        //     res.status(200)
        //     .json({
        //         message: 'Acionamento atualizado com sucesso',
        //         response: retorno
        //     });
        // } catch (e: any) {
        //     res.status(400)
        //     .json({
        //         message: `Erro ao atualizar acionamento`,
        //         response: e
        //     });
        //     console.log(e)
        // }
        res.send('bay')
    }

    public async Deletar(req: Request, res: Response)
    {
        // try { 
        //     const id = req.params.id;
        //     const retorno = await AcionamentoModel.delete(id);
        //     res.status(200)
        //     .json({
        //         message: 'Acionamento deletado com sucesso',
        //         response: retorno
        //     });
        // } catch (e: any) {
        //     res.status(400)
        //     .json({
        //         message: `Erro ao deletar acionamento`,
        //         response: e
        //     });
        //     console.log(e)
        // }
        res.send('bay')
    }

}

export default new AcionamentoController();