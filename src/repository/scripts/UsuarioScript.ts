import { Usuario } from "../../interface/UsuarioInterface";

class UsuarioScript
{
    public SelectBase()
    {

        let select =
        `   
            SELECT 
                *
            FROM
                usuarios
        `;

        return select;

    }

    public ListarUsuariosPorEquipamentoId(equipamentoId: string)
    {

        let select =
        `   
            SELECT 
                *
            FROM
                usuarios
            WHERE
                equipamentoId = '${equipamentoId}'
        `;

        return select;

    }

    public CadastrarUsuario(usuario: Usuario)
    {

        let select =
        `   
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

    public SelecionarUsuarioPorId(usuarioId: string)
    {

        let select =
        `   
            SELECT 
                *
            FROM
                usuarios
            WHERE
                id = '${usuarioId}'
        `;

        return select;

    }

    public AtualizarUsuario(usuario: Usuario)
    {
        let select =
        `   
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

    public DeletarUsuario(usuarioId: string)
    {
        let select =
        `   
            DELETE FROM 
                usuarios
            WHERE
                id = '${usuarioId}'
        `;

        return select;
    }

}

export default new UsuarioScript();