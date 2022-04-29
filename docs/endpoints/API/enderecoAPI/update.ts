const updateAPIEndereco = 
{
    put:{
        tags: ['Endereco'],
        description: "Atualizar usuario",
        operationId: 'updatUsuario',
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Endereco'
                    }
                }
            }
        },
        responses:{
            
        }
    },
}

export { updateAPIEndereco }
