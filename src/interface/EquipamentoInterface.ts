export interface Equipamento
{
    id: string;
    nome: string;
    ip: string;
    chip: string;
    versao: string;
    dataCadastro: Date;
};

export interface EquipamentoRequest extends Partial<Equipamento> {};