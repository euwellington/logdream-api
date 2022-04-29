import { Router } from 'express';
import MqttController from '../controller/MqttController';
import { verifyJWT } from '../middleware/token';

export const routes_mqtt = Router();

routes_mqtt.post('/enviar', verifyJWT, MqttController.Enviar);