import { Router } from 'express';
import UsuarioController from '../controller/UsuarioController';
import { verifyJWT } from '../middleware/token';

export const routes_usuario = Router();

routes_usuario.get('/', verifyJWT, UsuarioController.ListarUsuarios); 
routes_usuario.get('/:id', verifyJWT, UsuarioController.SelecionarUsuarioPorId); 
routes_usuario.get('/equipamento/:id', UsuarioController.ListarUsuariosPorEquipamentoId); 
routes_usuario.post('/', verifyJWT, UsuarioController.Cadastrar); 
routes_usuario.put('/', verifyJWT,  UsuarioController.Atualizar); 
routes_usuario.delete('/:id', verifyJWT, UsuarioController.Deletar); 