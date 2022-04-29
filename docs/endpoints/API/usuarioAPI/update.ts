const updateAPIUsuario = 
{
    put:{
        tags: ['Usuario'],
        description: "Atualizar usuario",
        operationId: 'updatUsuario',
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Usuario'
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
                            $ref:'#/components/schemas/Usuario'
                        }
                    }
                }
            }
        }
    },
}

export { updateAPIUsuario }
