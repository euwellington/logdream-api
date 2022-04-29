import { Equipamento } from "../../interface/EquipamentoInterface";

export type EquipamentoEntities = 
{
    getAll: () => void;
    getByPk: (equipamentoId: string) => void;
    create: (equipamento: Equipamento) => void;
    update: (equipamento: Equipamento) => void;
    delete: (equipamentoId: string) => void;
}