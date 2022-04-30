import { Nota } from "../../interface/NotaInterface";

class NotaScript
{


    public SelectBase()
    {

        let select =
        `   
            SELECT 
                *
            FROM
                notas
        `;

        return select;

    }

    public CadastrarNota(nota: Nota)
    {

        let select =
        `   
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

    public SelecionarNotaPorId(notaId: string)
    {

        let select =
        `
            SELECT 
                *
            FROM
                notas
            WHERE
                id = '${notaId}'
        `;

        return select;

    }

    public ListarNotaPorEquipamentoId(equipamentoId: string)
    {

        let select =
        `
            SELECT 
                *
            FROM
                notas
            WHERE
                equipamentoId = '${equipamentoId}'
        `;

        return select;

    }

    public AtualizarNota(nota: Nota)
    {
        let select =
        `   
            UPDATE 
                notas
            SET
                descricao = '${nota.descricao}'
            WHERE
                id = '${nota.id}'
        `;
    
        return select;
    }

    public DeletarEquipamento(notaId: string)
    {
        let select =
        `   
            DELETE FROM 
                notas
            WHERE
                id = '${notaId}'
        `;

        return select;
    }

}

export default new NotaScript();