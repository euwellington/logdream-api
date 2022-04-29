const getByEquipamentoFkNota = 
{
    get:{
        tags: ['Nota'],
        description: "listar nota por equipamentoId",
        operationId: 'listaEquipamentoPorId',
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

export { getByEquipamentoFkNota };