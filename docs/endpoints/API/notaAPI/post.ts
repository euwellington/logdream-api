const postAPINota = 
{
    post:{
        tags: ['Nota'],
        description: "cadastrar nota",
        operationId: 'postNota',
        parameters:[],
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
    }
}

export { postAPINota }