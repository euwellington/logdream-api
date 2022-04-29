const postAPIEndereco = 
{
    post:{
        tags: ['Endereco'],
        description: "cadastrar endereco",
        operationId: 'postEndereco',
        parameters:[],
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
    }
}

export { postAPIEndereco }