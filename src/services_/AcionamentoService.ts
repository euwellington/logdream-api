import { Request, Response } from "express";
import AcionamentoModel from "../services/AcionamentoService";

class AcionamentoService
{
    public async Acionar(id: string, usuarioId: string, flag: string)
    {
        try {
            const retorno = await AcionamentoModel.acionar(id, usuarioId, flag);
            // res.status(200)
            // .json({
            //     message: 'Acionamento acatado com successo!',
            //     estado: retorno,
            //     flag: flag
            // });
        } catch (e: any) {
            // res.status(400)
            // .json({
            //     message: `Erro no acionamento!`,
            //     response: e
            // });
        }
    }
}