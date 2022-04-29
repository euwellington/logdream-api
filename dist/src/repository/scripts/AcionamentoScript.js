"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AcionamentoScript {
    Acionar(acionamento) {
        let select = `   
            UPDATE 
                acionamentos
            SET
                estado = '${acionamento.estado ? 1 : 0}',
                flag = '${acionamento.flag}'
            WHERE
                id = '${acionamento.id}'
        `;
        return select;
    }
    SelectBase() {
        let select = `   
            SELECT 
                *
            FROM
                acionamentos
        `;
        return select;
    }
    AcionamentoPorEquipamentoId(equipamentoId) {
        let select = `   
            SELECT 
                *
            FROM
                acionamentos
            WHERE
                equipamentoId = '${equipamentoId}'
        `;
        return select;
    }
    CadastrarAconamento(acionamento) {
        let select = `   
            INSERT INTO
                acionamentos
                (
                    id,
                    equipamentoId,
                    nome,
                    estado,
                    topic,
                    dataCadastro,
                    tipo,
                    flag
                )
            VALUES
                (
                    '${acionamento.id}',
                    '${acionamento.equipamentoId}',
                    '${acionamento.nome}',
                    '${acionamento.estado ? 1 : 0}',
                    '${acionamento.topic}',
                    '${acionamento.dataCadastro}',
                    '${acionamento.tipo}',
                    '${acionamento.flag}'
                )
        `;
        return select;
    }
    SelecionarAcionamentoPorId(acionamentoId) {
        let select = `   
            SELECT 
                *
            FROM
                acionamentos
            WHERE
                id = '${acionamentoId}'
        `;
        return select;
    }
    AtualizarAcionamento(acionamento) {
        let select = `   
            UPDATE 
                acionamentos
            SET
                nome = '${acionamento.nome}',
                topic = '${acionamento.topic}',
                tipo = '${acionamento.tipo}',
                flag = '${acionamento.flag}'
            WHERE
                id = '${acionamento.id}'
        `;
        return select;
    }
    DeletarAcionamento(acionamentoId) {
        let select = `   
            DELETE FROM 
                acionamentos
            WHERE
                id = '${acionamentoId}'
        `;
        return select;
    }
}
exports.default = new AcionamentoScript();
