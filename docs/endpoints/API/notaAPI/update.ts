const updateAPINota= 
{
    put:{
        tags: ['Nota'],
        description: "Atualizar nota",
        operationId: 'updatUsuario',
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Nota'
                    }
                }
            }
        },
        responses:{
            '200':{
                
            }
        }
    },
}

export { updateAPINota }
