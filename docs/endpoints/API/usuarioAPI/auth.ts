const postAPIAuth = 
{
    post:{
        tags: ['Auth'],
        description: "login",
        operationId: 'login',
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Auth'
                    }
                }
            }
        },
        responses:{
            
        }
    }
}

export { postAPIAuth }