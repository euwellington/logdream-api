export interface Evento
{
    id: string;
    usuarioId: string;
    equipamentoId: string;
    acionamentoId: string;
    dataHora: Date;
};

export interface EventoRequest extends Partial<Evento> {};