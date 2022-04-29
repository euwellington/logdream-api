import { Request, Response } from 'express'; 
import PostModel from '../models/UsuarioModel';
import { Usuario } from '../interface/UsuarioInterface';

class UsuarioController
{
    public async Auth(req: Request, res: Response)
    {
        try {
            const { email, senha } = req.body;            
            const retorno = await PostModel.login(email, senha);
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Usuário não encontrado!`,
                response: e
            });
            console.log(e);
        }
    }

    public async ListarUsuarios(req: Request, res: Response)
    {
        try { 
            const retorno = await PostModel.getAll();
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum usuário encontrado!`,
                response: e
            });
        }
    }

    public async ListarUsuariosPorEquipamentoId(req: Request, res: Response)
    {
        try { 
            let id = req.params.id;
            const retorno = await PostModel.getByEquipamentoFk(id);
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum usuário encontrado!`,
                response: e
            });
        }
    }

    public async SelecionarUsuarioPorId(req: Request, res: Response)
    {
        try { 
            let id = req.params.id;
            const retorno: any = await PostModel.getByPk(id);
            res.status(200)
            .json(retorno[0]);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum usuário encontrado!`,
                response: e
            });
        }
    }

    public async Cadastrar(req: Request, res: Response)
    {
        try { 
            const usuario = <Usuario>req.body;
            const retorno = await PostModel.create(usuario);
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao cadastrar usuário`,
                response: e
            });
            console.log(e)
        }
    }

    public async Atualizar(req: Request, res: Response)
    {
        try { 
            const usuario = <Usuario>req.body;
            const retorno = await PostModel.update(usuario);
            res.status(200)
            .json({
                message: 'Usuário atualizado com sucesso',
                response: retorno
            });
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao atualizar usuário`,
                response: e
            });
            console.log(e)
        }
    }

    public async Deletar(req: Request, res: Response)
    {
        try { 
            const id = req.params.id;
            const retorno = await PostModel.delete(id);
            res.status(200)
            .json({
                message: 'Usuário deletado com sucesso',
                response: retorno
            });
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao deletar usuário`,
                response: e
            });
            console.log(e)
        }
    }

}

export default new UsuarioController();