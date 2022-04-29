const postAPIAcionamento = 
{
    post:{
        tags: ['Acionamento'],
        description: "Cadastrar acionamento",
        operationId: 'postAcionamento',
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

export { postAPIAcionamento }
