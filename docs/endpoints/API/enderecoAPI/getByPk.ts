const getByPkEndereco = 
{
    get:{
        tags: ['Endereco'],
        description: "listar endereco por id",
        operationId: 'listarEnderecoPorId',
        parameters:[
            {
                name: "id", // name of param
                in: "path", // location of param
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true, // mandatory
                description: "Id do endereco", // param desc
              },
        ],
        responses: {
           
        },
    }
}

export { getByPkEndereco };