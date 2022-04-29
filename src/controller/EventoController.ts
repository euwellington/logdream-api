import { Request, Response } from 'express'; 
import EventoModel from '../models/EventoModel';
import { Usuario } from '../interface/UsuarioInterface';
import { Evento } from '../interface/EventoInterface';

class EventoController
{
    public async ListarEventos(req: Request, res: Response)
    {
        try { 
            const retorno = await EventoModel.getAll();
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum evento encontrado!`,
                response: e
            });
        }
    }

    public async ListarEventosPorEquipamentoId(req: Request, res: Response)
    {
        try { 
            let id = req.params.id;
            const retorno = await EventoModel.getByEquipamentoFk(id);
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum evento encontrado!`,
                response: e
            });
        }
    }

    public async SelecionarEventoPorId(req: Request, res: Response)
    {
        try { 
            let id = req.params.id;
            const retorno = await EventoModel.getByPk(id);
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum evento encontrado!`,
                response: e
            });
        }
    }

    public async Cadastrar(req: Request, res: Response)
    {
        try { 
            const evento = <Evento>req.body;
            const retorno = await EventoModel.create(evento);
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao salvar evento`,
                response: e
            });
            console.log(e)
        }
    }

    public async Deletar(req: Request, res: Response)
    {
        try { 
            const id = req.params.id;
            const retorno = await EventoModel.delete(id);
            res.status(200)
            .json({
                message: 'Evento deletado com sucesso',
                response: retorno
            });
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao deletar evento`,
                response: e
            });
            console.log(e)
        }
    }

}

export default new EventoController();