const deleteAPINota = 
{
    delete:{
        tags: ['Nota'],
        description: "deletar nota",
        operationId: 'deletar',
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
        responses:{
            '200':{
                
            }
        }
    },
}

export { deleteAPINota }
