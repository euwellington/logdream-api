import { Router } from 'express';
import UsuarioController from '../controller/UsuarioController';

export const routes_auth = Router();
 
routes_auth.post('/', UsuarioController.Auth); 