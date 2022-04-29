const deleteAPIUsuario = 
{
    delete:{
        tags: ['Usuario'],
        description: "deletar usuario",
        operationId: 'deletar',
        parameters:[
            {
                name: "id", // name of param
                in: "path", // location of param
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true, // mandatory
                description: "Id do usuario", // param desc
              },
        ],
        responses:{
            '200':{
                description:"Resposta do servidor",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Usuario'
                        }
                    }
                }
            }
        }
    },
}

export { deleteAPIUsuario }
