export interface Equipamento
{
    id: string;
    nome: string;
    ip: string;
    usuario: string;
    senha: string;
    chip: string;
    versao: string;
    dataCadastro: string;
};

export interface EquipamentoRequest extends Partial<Equipamento> {};