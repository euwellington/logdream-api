export interface Evento
{
    id: string;
    usuarioId: string;
    equipamentoId: string;
    acionamentoId: string;
    dataHora: string;
};

export interface EventoRequest extends Partial<Evento> {};