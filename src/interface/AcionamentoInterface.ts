export interface Acionamento
{
    id: string;
    equipamentoId: string;
    nome: string;
    estado: boolean;
    topic: string;
    dataCadastro: Date;
    tipo: number;
    flag: string;
};

export interface AcionamentoRequest extends Partial<Acionamento> {};