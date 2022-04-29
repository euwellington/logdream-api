const getByPkNota = 
{
    get:{
        tags: ['Nota'],
        description: "listar nota por id",
        operationId: 'listarNotaPorId',
        parameters:[
            {
                name: "id", // name of param
                in: "path", // location of param
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true, // mandatory
                description: "Id da nota", // param desc
              },
        ],
        responses: {
            
        },
    }
}

export { getByPkNota };