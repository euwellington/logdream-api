"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotaScript {
    SelectBase() {
        let select = `   
            SELECT 
                *
            FROM
                notas
        `;
        return select;
    }
    CadastrarNota(nota) {
        let select = `   
            INSERT INTO
                notas
                (
                    id,
                    equipamentoId,
                    usuarioId,
                    descricao,
                    dataHora,
                    tipo
                )
            VALUES
                (
                    '${nota.id}',
                    '${nota.equipamentoId}',
                    '${nota.usuarioId}',
                    '${nota.descricao}',
                    '${nota.dataHora}',
                    '${nota.tipo}'
                )
        `;
        return select;
    }
    SelecionarNotaPorId(notaId) {
        let select = `
            SELECT 
                *
            FROM
                notas
            WHERE
                id = '${notaId}'
        `;
        return select;
    }
    ListarNotaPorEquipamentoId(equipamentoId) {
        let select = `
            SELECT 
                *
            FROM
                notas
            WHERE
                equipamentoId = '${equipamentoId}'
        `;
        return select;
    }
    AtualizarNota(nota) {
        let select = `   
            UPDATE 
                notas
            SET
            descricao = '${nota.descricao}'
            WHERE
                id = '${nota.id}'
        `;
        return select;
    }
    DeletarEquipamento(notaId) {
        let select = `   
            DELETE FROM 
                notas
            WHERE
                id = '${notaId}'
        `;
        return select;
    }
}
exports.default = new NotaScript();
