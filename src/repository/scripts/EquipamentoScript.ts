import { Acionamento } from "../../interface/AcionamentoInterface";
import { Equipamento } from "../../interface/EquipamentoInterface";

class EquipamentoScript
{


    public SelectBase()
    {

        let select =
        `   
            SELECT 
                *
            FROM
                equipamentos
        `;

        return select;

    }

    public CadastrarEquipamento(equipamento: Equipamento)
    {

        let select =
        `   
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

    public SelecionarEquipamentoPorId(equipamentoId: string)
    {

        let select =
        `
            SELECT 
                *
            FROM
                equipamentos
            WHERE
                id = '${equipamentoId}'
        `;

        return select;

    }

    public AtualizarEquipamento(equipamento: Equipamento)
    {
        let select =
        `   
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

    public DeletarEquipamento(equipamentoId: string)
    {
        let select =
        `   
            DELETE FROM 
                equipamentos
            WHERE
                id = '${equipamentoId}'
        `;

        return select;
    }

}

export default new EquipamentoScript();