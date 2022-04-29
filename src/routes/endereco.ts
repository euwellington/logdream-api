import { Router } from 'express';
import EnderecoController from '../controller/EnderecoController';
import { verifyJWT } from '../middleware/token';

export const routes_enderecos = Router();

routes_enderecos.get('/', verifyJWT, EnderecoController.ListarEnderecos); 
routes_enderecos.get('/:id', verifyJWT, EnderecoController.SelecionarEnderecoPorId); 
routes_enderecos.get('/equipamento/:id', verifyJWT, EnderecoController.ListarEnderecoPorEquipamentoId); 
routes_enderecos.post('/', verifyJWT, EnderecoController.Cadastrar); 
routes_enderecos.put('/', verifyJWT,  EnderecoController.Atualizar); 
routes_enderecos.delete('/:id', verifyJWT, EnderecoController.Deletar); 