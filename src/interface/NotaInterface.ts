export interface Nota
{
    id: string;
    equipamentoId: string;
    usuarioId: string;
    descricao: string;
    dataHora: Date;
    tipo: number;
};

export interface NotaRequest extends Partial<Nota> {};