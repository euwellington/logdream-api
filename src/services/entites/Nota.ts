import { Nota } from "../../interface/NotaInterface";

export type NotaEntities = 
{
    getAll: () => void;
    getByPk: (notaId: string) => void;
    getByEquipamentoFk:(equipamentoId: string) => void;
    create: (nota: Nota) => void;
    update: (evnotaento: Nota) => void;
    delete: (notaId: string) => void;
}
