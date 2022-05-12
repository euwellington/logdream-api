import { Request, Response } from 'express'; 
import NotaService from '../services/NotaService';
import { Nota } from '../interface/NotaInterface';

class NotaController
{

    public async ListarNotas(req: Request, res: Response)
    {
        try { 
            const retorno = await NotaService.getAll();
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhuma nota encontrado!`,
                response: e
            });
        }
    }

    public async ListarNotasPorEquipamentoId(req: Request, res: Response)
    {
        try { 
            let id = req.params.id;
            const retorno = await NotaService.getByEquipamentoFk(id);
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhuma nota encontrado!`,
                response: e
            });
        }
    }

    public async SelecionarNotaPorId(req: Request, res: Response)
    {
        try { 
            let id = req.params.id;
            const retorno = await NotaService.getByPk(id);
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhuma nota encontrado!`,
                response: e
            });
        }
    }

    public async Cadastrar(req: Request, res: Response)
    {
        try { 
            const nota = req.body;
            const retorno = await NotaService.create(nota);
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao cadastrar nota`,
                response: e
            });
            console.log(e)
        }
    }

    public async Atualizar(req: Request, res: Response)
    {
        try { 
            const nota = req.body;
            const retorno = await NotaService.update(nota);
            res.status(200)
            .json({
                message: 'Nota atualizado com sucesso',
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
            const retorno = await NotaService.delete(id);
            res.status(200)
            .json({
                message: 'Nota deletado com sucesso',
                response: retorno
            });
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao deletar nota`,
                response: e
            });
            console.log(e)
        }
    }

}

export default new NotaController();