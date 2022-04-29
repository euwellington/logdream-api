import { Request, Response } from 'express'; 
import EquipamentoModel from '../models/EquipamentoModel';
import { Equipamento } from '../interface/EquipamentoInterface';

class EquipamentoController
{

    public async ListarEquipamentos(req: Request, res: Response)
    {
        try { 
            const retorno = await EquipamentoModel.getAll();
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum equipamento encontrado!`,
                response: e
            });
        }
    }

    public async SelecionarEquipamentoPorId(req: Request, res: Response)
    {
        try { 
            let id = req.params.id;
            const retorno: any = await EquipamentoModel.getByPk(id);
            res.status(200)
            .json(retorno[0]);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum equipamento encontrado!`,
                response: e
            });
        }
    }

    public async Cadastrar(req: Request, res: Response)
    {
        try { 
            const equipamento = <Equipamento>req.body;
            const retorno = await EquipamentoModel.create(equipamento);
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao cadastrar equipamento`,
                response: e
            });
            console.log(e)
        }
    }

    public async Atualizar(req: Request, res: Response)
    {
        try { 
            const equipamento = <Equipamento>req.body;
            const retorno = await EquipamentoModel.update(equipamento);
            res.status(200)
            .json({
                message: 'Equipamento atualizado com sucesso',
                response: retorno
            });
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao atualizar equipamento`,
                response: e
            });
            console.log(e)
        }
    }

    public async Deletar(req: Request, res: Response)
    {
        try { 
            const id = req.params.id;
            const retorno = await EquipamentoModel.delete(id);
            res.status(200)
            .json({
                message: 'Equipamento deletado com sucesso',
                response: retorno
            });
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao deletar equipamento`,
                response: e
            });
            console.log(e)
        }
    }

}

export default new EquipamentoController();