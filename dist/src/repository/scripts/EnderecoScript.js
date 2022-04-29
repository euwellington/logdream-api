"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnderecoScript {
    SelectBase() {
        let select = `   
            SELECT 
                *
            FROM
                enderecos
        `;
        return select;
    }
    CadastrarEndereco(endereco) {
        let select = `   
            INSERT INTO
                enderecos
                (
                    id,
                    equipamentoId,
                    endereco,
                    cidade,
                    bairro,
                    obs
                )
            VALUES
                (
                    '${endereco.id}',
                    '${endereco.equipamentoId}',
                    '${endereco.endereco}',
                    '${endereco.cidade}',
                    '${endereco.bairro}',
                    '${endereco.obs}'
                )
        `;
        return select;
    }
    SelecionarEnderecoPorId(enderecoId) {
        let select = `   
            SELECT 
                *
            FROM
                enderecos
            WHERE
                id = '${enderecoId}'
        `;
        return select;
    }
    SelecionarEnderecoPorEquipamentoId(equipamentoId) {
        let select = `   
            SELECT 
                *
            FROM
                enderecos
            WHERE
                equipamentoId = '${equipamentoId}'
        `;
        return select;
    }
    AtualizarEndereco(endereco) {
        let select = `   
            UPDATE 
                enderecos
            SET
                endereco = '${endereco.endereco}',
                cidade = '${endereco.cidade}',
                bairro = '${endereco.bairro}',
                obs = '${endereco.obs}'
            WHERE
                id = '${endereco.id}'
        `;
        return select;
    }
    DeletarEndereco(enderecoId) {
        let select = `   
            DELETE FROM 
                enderecos
            WHERE
                id = '${enderecoId}'
        `;
        return select;
    }
}
exports.default = new EnderecoScript();
