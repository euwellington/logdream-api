const updateAPIAcionamento = 
{
    put:{
        tags: ['Acionamento'],
        description: "Listar acionamento por id",
        operationId: 'updateAcionamentoPorId',
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Acionamento'
                    }
                }
            }
        },
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

export { updateAPIAcionamento }
