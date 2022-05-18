import { Router } from 'express';
import EquipamentoController from '../controller/EquipamentoController';
import { verifyJWT } from '../middleware/token';

export const routes_equipamentos = Router();

routes_equipamentos.get('/', verifyJWT, EquipamentoController.ListarEquipamentos); 
routes_equipamentos.get('/:id', EquipamentoController.SelecionarEquipamentoPorId); 
routes_equipamentos.post('/', verifyJWT, EquipamentoController.Cadastrar); 
routes_equipamentos.put('/', verifyJWT, EquipamentoController.Atualizar); 
routes_equipamentos.delete('/:id', verifyJWT, EquipamentoController.Deletar); 