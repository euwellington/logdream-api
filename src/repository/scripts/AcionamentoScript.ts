import { Acionamento } from "../../interface/AcionamentoInterface";

class AcionamentoScript
{

    public Acionar(acionamento: Acionamento)
    {
        let select =
        `   
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

    public SelectBase()
    {

        let select =
        `   
            SELECT 
                *
            FROM
                acionamentos
        `;

        return select;

    }

    public AcionamentoPorEquipamentoId(equipamentoId: string)
    {

        let select =
        `   
            SELECT 
                *
            FROM
                acionamentos
            WHERE
                equipamentoId = '${equipamentoId}'
        `;

        return select;

    }

    public CadastrarAconamento(acionamento: Acionamento)
    {

        let select =
        `   
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

    public SelecionarAcionamentoPorId(acionamentoId: string)
    {

        let select =
        `   
            SELECT 
                *
            FROM
                acionamentos
            WHERE
                id = '${acionamentoId}'
        `;

        return select;

    }

    public AtualizarAcionamento(acionamento: Acionamento)
    {
        let select =
        `   
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

    public DeletarAcionamento(acionamentoId: string)
    {
        let select =
        `   
            DELETE FROM 
                acionamentos
            WHERE
                id = '${acionamentoId}'
        `;

        return select;
    }

}

export default new AcionamentoScript();