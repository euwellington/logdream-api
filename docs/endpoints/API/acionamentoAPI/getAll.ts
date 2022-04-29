const getAllAPIAcionamento = 
{
    get:{
        tags: ['Acionamento'],
        description: "Listar todos os acionamentos",
        operationId: 'getAcionamento',
        parameters:[],
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

export { getAllAPIAcionamento }
