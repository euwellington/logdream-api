const getByPkAPIAcionamento = 
{
    get:{
        tags: ['Acionamento'],
        description: "Listar acionamento por id",
        operationId: 'getAcionamentoPorId',
        parameters:[
            {
                name: "id", // name of param
                in: "path", // location of param
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true, // mandatory
                description: "Id do acionamento", // param desc
              },
        ],
        responses:{
            '200':{
                description:"Resposta do servidor",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Acionamento'
                        }
                    }
                }
            }
        }
    },
}

export { getByPkAPIAcionamento }
