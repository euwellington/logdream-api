const acionarAPIAcionamento = 
{
    get:{
        tags: ['Acionamento'],
        description: "acionar",
        operationId: 'acionar',
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
            {
                name: "usuarioId", // name of param
                in: "path", // location of param
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                required: true, // mandatory
                description: "Id do usuário", // param desc
            },
            {
                name: "flag", // name of param
                in: "path", // location of param
                schema: {
                //   $ref: "#/components/schemas/id", // id model
                },
                // required: true, // mandatory
                description: "valor da flag", // param desc
            }
        ],
        responses:{
            '200':{
                description:"Resposta do servidor",
                
            }
        }
    },
}

export { acionarAPIAcionamento }
