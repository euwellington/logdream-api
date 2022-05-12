import { Evento } from "../../interface/EventoInterface";

export type EventoEntities = 
{
    getAll: () => void;
    getByPk: (eventoId: string) => void;
    getByEquipamentoFk: (equipamentoId: string) => void;
    create: (evento: Evento) => void;
    delete: (eventoId: string) => void;
}