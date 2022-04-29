import { Evento } from "../../interface/EventoInterface";
import { Usuario } from "../../interface/UsuarioInterface";

class EventoScript
{
    public SelectBase()
    {

        let select =
        `   
            SELECT 
                e.id as id,
                eq.nome as equipamento,
                u.nome as usuarioNome,
                a.nome as acionamentoNome,
                e.dataHora as dataHoraEvento

            FROM
                eventos AS e
            INNER JOIN
                usuarios AS u
            ON 
                u.id = e.usuarioId 
            INNER JOIN
                equipamentos AS eq
            ON 
                eq.id = e.equipamentoId 
            INNER JOIN
                acionamentos AS a
            ON 
                a.id = e.acionamentoId 
            AND
                a.equipamentoId = e.equipamentoId
            
        `;

        return select;

    }

    public ListarEventoPorEquipamentoId(equipamentoId: string)
    {

        let select =
        `   
            SELECT 
                e.id as id,
                eq.nome as equipamento,
                u.nome as usuarioNome,
                a.nome as acionamentoNome,
                e.dataHora as dataHoraEvento

            FROM
                eventos AS e
            INNER JOIN
                usuarios AS u
            ON 
                u.id = e.usuarioId 
            INNER JOIN
                equipamentos AS eq
            ON 
                eq.id = e.equipamentoId 
            INNER JOIN
                acionamentos AS a
            ON 
                a.id = e.acionamentoId 
            AND
                a.equipamentoId = e.equipamentoId
            WHERE
                eq.id = '${equipamentoId}'
            
        `;

        return select;

    }

    public Salvar(evento: Evento)
    {

        let select =
        `   
            INSERT INTO
                eventos
                (
                    id,
                    usuarioId,
                    equipamentoId,
                    acionamentoId,
                    dataHora
                )
            VALUES
                (
                    '${evento.id}',
                    '${evento.usuarioId}',
                    '${evento.equipamentoId}',
                    '${evento.acionamentoId}',
                    '${evento.dataHora}'
                );
        `;

        return select;

    }

    public SelecionarEventoPorId(eventoId: string)
    {

        let select =
        `   
            SELECT 
                *
            FROM
                eventos
            WHERE
                id = '${eventoId}'
        `;

        return select;

    }

    public DeletarEvento(eventoId: string)
    {
        let select =
        `   
            DELETE FROM 
                eventos
            WHERE
                id = '${eventoId}'
        `;

        return select;
    }

}

export default new EventoScript();