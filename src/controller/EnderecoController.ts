import { Request, Response } from 'express'; 
import EnderecoService from '../services/EnderecoService';
import { Endereco } from '../interface/EnderecoInterface';

class EnderecoController
{
    public async ListarEnderecos(req: Request, res: Response)
    {
        try { 
            const retorno = await EnderecoService.getAll();
            res.status(200)
            .json(retorno);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum endereço encontrado!`,
                response: e
            });
        }
    }

    public async ListarEnderecoPorEquipamentoId(req: Request, res: Response)
    {
        try { 
            let id = req.params.id;
            const retorno = await EnderecoService.getByEquipamentoFk(id);
            res.status(200)
            .json(retorno); 
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum endereco encontrado!`,
                response: e
            });
        }
    }

    public async SelecionarEnderecoPorId(req: Request, res: Response)
    {
        try { 
            let id = req.params.id;
            const retorno: any = await EnderecoService.getByPk(id);
            res.status(200)
            .json(retorno[0]);
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Nenhum endereco encontrado!`,
                response: e
            });
        }
    }

    public async Cadastrar(req: Request, res: Response)
    {
        try { 
            const endereco = req.body;
            const retorno = await EnderecoService.create(endereco);
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
            const endereco = req.body;
            const retorno = await EnderecoService.update(endereco);
            res.status(200)
            .json({
                message: 'Endereco atualizado com sucesso',
                response: retorno
            });
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao atualizar endereco`,
                response: e
            });
            console.log(e)
        }
    }

    public async Deletar(req: Request, res: Response)
    {
        try { 
            const id = req.params.id;
            const retorno = await EnderecoService.delete(id);
            res.status(200)
            .json({
                message: 'Endereco deletado com sucesso',
                response: retorno
            });
        } catch (e: any) {
            res.status(400)
            .json({
                message: `Erro ao deletar endereco`,
                response: e
            });
            console.log(e)
        }
    }

}

export default new EnderecoController();