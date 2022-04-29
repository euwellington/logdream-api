"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EquipamentoScript {
    SelectBase() {
        let select = `   
            SELECT 
                *
            FROM
                equipamentos
        `;
        return select;
    }
    CadastrarEquipamento(equipamento) {
        let select = `   
            INSERT INTO
                equipamentos
                (
                    id,
                    nome,
                    ip,
                    chip,
                    versao,
                    dataCadastro
                )
            VALUES
                (
                    '${equipamento.id}',
                    '${equipamento.nome}',
                    '${equipamento.ip}',
                    '${equipamento.chip}',
                    '${equipamento.versao}',
                    '${equipamento.dataCadastro}'
                )
        `;
        return select;
    }
    SelecionarEquipamentoPorId(equipamentoId) {
        let select = `
            SELECT 
                *
            FROM
                equipamentos
            WHERE
                id = '${equipamentoId}'
        `;
        return select;
    }
    AtualizarEquipamento(equipamento) {
        let select = `   
            UPDATE 
                equipamentos
            SET
                nome = '${equipamento.nome}',
                ip = '${equipamento.ip}',
                chip = '${equipamento.chip}',
                versao = '${equipamento.versao}'
            WHERE
                id = '${equipamento.id}'
        `;
        return select;
    }
    DeletarEquipamento(equipamentoId) {
        let select = `   
            DELETE FROM 
                equipamentos
            WHERE
                id = '${equipamentoId}'
        `;
        return select;
    }
}
exports.default = new EquipamentoScript();
