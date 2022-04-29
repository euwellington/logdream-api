"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioScript {
    SelectBase() {
        let select = `   
            SELECT 
                *
            FROM
                usuarios
        `;
        return select;
    }
    ListarUsuariosPorEquipamentoId(equipamentoId) {
        let select = `   
            SELECT 
                *
            FROM
                usuarios
            WHERE
                equipamentoId = '${equipamentoId}'
        `;
        return select;
    }
    CadastrarUsuario(usuario) {
        let select = `   
            INSERT INTO
                usuarios
                (
                    id,
                    equipamentoId,
                    nome,
                    cpf,
                    email,
                    nascimento,
                    senha,
                    dataCadastro
                )
            VALUES
                (
                    '${usuario.id}',
                    '${usuario.equipamentoId}',
                    '${usuario.nome}',
                    '${usuario.cpf}',
                    '${usuario.email}',
                    '${usuario.nascimento}',
                    '${usuario.senha}',
                    '${usuario.dataCadastro}'
                );
        `;
        return select;
    }
    SelecionarUsuarioPorId(usuarioId) {
        let select = `   
            SELECT 
                *
            FROM
                usuarios
            WHERE
                id = '${usuarioId}'
        `;
        return select;
    }
    AtualizarUsuario(usuario) {
        let select = `   
            UPDATE 
                usuarios
            SET
                nome = '${usuario.nome}',
                cpf = '${usuario.cpf}',
                email = '${usuario.email}',
                nascimento = '${usuario.nascimento}',
                senha = '${usuario.senha}'
            WHERE
                id = '${usuario.id}'
        `;
        return select;
    }
    DeletarUsuario(usuarioId) {
        let select = `   
            DELETE FROM 
                usuarios
            WHERE
                id = '${usuarioId}'
        `;
        return select;
    }
}
exports.default = new UsuarioScript();
