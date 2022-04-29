import { Endereco } from "../../interface/EnderecoInterface";

export interface EnderecoEntities 
{
    getAll: () => void;
    getByPk: (enderecoId: string) => void;
    getByEquipamentoFk: (equipamentoId: string) => void;
    create: (usuario: Endereco) => void;
    update: (usuario: Endereco) => void;
    delete: (enderecoId: string) => void;
}