const getByEquipamentoFkEndereco = 
{
    get:{
        tags: ['Endereco'],
        description: "listar endereco por equipamentoId",
        operationId: 'listarEnderecoPorEquipamentoId',
        parameters:[
            {
                name: "id", // name of param
                in: "path", // location of param
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true, // mandatory
                description: "Id do equipamento", // param desc
              },
        ],
        responses: {
          
        },
    }
}

export { getByEquipamentoFkEndereco };