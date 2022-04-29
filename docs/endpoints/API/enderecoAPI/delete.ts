const deleteAPIEndereco = 
{
    delete:{
        tags: ['Endereco'],
        description: "deletar endereco",
        operationId: 'deletar',
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
        responses:{
            
        }
    },
}

export { deleteAPIEndereco }
