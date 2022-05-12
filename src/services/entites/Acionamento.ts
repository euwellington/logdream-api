import { Acionamento } from "../../interface/AcionamentoInterface";

export type AcionamentoEntities = 
{
    acionar: (acionamentoId: string, usuarioId: string, flag: string) => void;
    getAll: () => void;
    getByPk: (acionamentoId: string) => void;
    getByEquipamentoFk: (equipamentoId: string) => void;
    create: (acionamento: Acionamento) => void;
    update: (acionamento: Acionamento) => void;
    delete: (eventoId: string) => void;
}