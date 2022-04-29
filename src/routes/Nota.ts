import { Router } from 'express';
import NotaController from '../controller/NotaController';
import { verifyJWT } from '../middleware/token';

export const routes_notas = Router();

routes_notas.get('/', verifyJWT, NotaController.ListarNotas); 
routes_notas.get('/:id', verifyJWT, NotaController.SelecionarNotaPorId); 
routes_notas.get('/equipamento/:id', verifyJWT, NotaController.ListarNotasPorEquipamentoId); 
routes_notas.post('/', verifyJWT, NotaController.Cadastrar); 
routes_notas.put('/', verifyJWT,  NotaController.Atualizar); 
routes_notas.delete('/:id', verifyJWT, NotaController.Deletar); 