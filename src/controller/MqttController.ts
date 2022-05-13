import { Request, Response } from 'express'; 
import { send } from '../services/mqtt/pub';

class MqttController
{
    public async Enviar(req: Request, res: Response)
    {
        try
        {  
            const { topic, mensagem } = req.body;
            const state = await send(topic, mensagem);
            res.status(200)
            .json({
                status: 'Enviado com sucesso!',
                mensagem: topic,
                e: state
            })
        }
        catch(e)
        {
            res.status(400)
            .json({
                message: 'Erro ao enviar mensagem via MQTT',
                response: e
            })
        }
    }
}

export default new MqttController();
