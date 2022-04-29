import { Endereco } from "../../interface/EnderecoInterface";

class EnderecoScript
{

    public SelectBase()
    {

        let select =
        `   
            SELECT 
                *
            FROM
                enderecos
        `;

        return select;

    }

    public CadastrarEndereco(endereco: Endereco)
    {

        let select =
        `   
            INSERT INTO
                enderecos
                (
                    id,
                    equipamentoId,
                    estado,
                    cidade,
                    endereco,
                    bairro,
                    obs
                )
            VALUES
                (
                    '${endereco.id}',
                    '${endereco.equipamentoId}',
                    '${endereco.estado}',
                    '${endereco.endereco}',
                    '${endereco.cidade}',
                    '${endereco.bairro}',
                    '${endereco.obs}'
                )
        `;

        return select;

    }

    public SelecionarEnderecoPorId(enderecoId: string)
    {

        let select =
        `   
            SELECT 
                *
            FROM
                enderecos
            WHERE
                id = '${enderecoId}'
        `;

        return select;

    }

    public SelecionarEnderecoPorEquipamentoId(equipamentoId: string)
    {

        let select =
        `   
            SELECT 
                *
            FROM
                enderecos
            WHERE
                equipamentoId = '${equipamentoId}'
        `;

        return select;

    }

    public AtualizarEndereco(endereco: Endereco)
    {
        let select =
        `   
            UPDATE 
                enderecos
            SET
                estado = '${endereco.estado}',
                endereco = '${endereco.endereco}',
                cidade = '${endereco.cidade}',
                bairro = '${endereco.bairro}',
                obs = '${endereco.obs}'
            WHERE
                id = '${endereco.id}'
        `;
    
        return select;
    }

    public DeletarEndereco(enderecoId: string)
    {
        let select =
        `   
            DELETE FROM 
                enderecos
            WHERE
                id = '${enderecoId}'
        `;

        return select;
    }

}

export default new EnderecoScript();