"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventoScript {
    SelectBase() {
        let select = `   
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
    ListarEventoPorEquipamentoId(equipamentoId) {
        let select = `   
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
    Salvar(evento) {
        let select = `   
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
    SelecionarEventoPorId(eventoId) {
        let select = `   
            SELECT 
                *
            FROM
                eventos
            WHERE
                id = '${eventoId}'
        `;
        return select;
    }
    DeletarEvento(eventoId) {
        let select = `   
            DELETE FROM 
                eventos
            WHERE
                id = '${eventoId}'
        `;
        return select;
    }
}
exports.default = new EventoScript();
