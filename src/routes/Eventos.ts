import { Router } from 'express';
import EventoController from '../controller/EventoController';
import { verifyJWT } from '../middleware/token';

export const routes_eventos = Router();

routes_eventos.get('/', verifyJWT, EventoController.ListarEventos); 
routes_eventos.get('/:id', verifyJWT, EventoController.SelecionarEventoPorId); 
routes_eventos.get('/equipamento/:id', verifyJWT, EventoController.ListarEventosPorEquipamentoId); 
routes_eventos.post('/', verifyJWT, EventoController.Cadastrar); 
routes_eventos.delete('/:id', verifyJWT, EventoController.Deletar); 