import { Router } from 'express';
import AcionamentoController from '../controller/AcionamentoController';
import { verifyJWT } from '../middleware/token';

export const routes_acionamentos = Router();

// routes_acionamentos.get('/:id', verifyJWT, AcionamentoController.Acionar); 
routes_acionamentos.get('/acionar/:id/:usuarioId/:flag', verifyJWT, AcionamentoController.Acionar); 
routes_acionamentos.get('/:id', verifyJWT, AcionamentoController.SelecionarAcionamentoPorId); 
routes_acionamentos.get('/equipamentoId/:id', AcionamentoController.ListarAcionamentosPorEquipamentoId); 
routes_acionamentos.get('/', AcionamentoController.ListarAcionamentos); 
routes_acionamentos.post('/', AcionamentoController.Cadastrar); 
routes_acionamentos.put('/', verifyJWT, AcionamentoController.Atualizar); 
routes_acionamentos.delete('/:id', verifyJWT, AcionamentoController.Deletar); 